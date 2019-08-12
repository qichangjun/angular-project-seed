import * as _ from 'lodash';
import { GridApi, GridOptions, RowNode, SortChangedEvent } from 'ag-grid';

export class FileListGridOptions implements GridOptions {
    headerHeight = 40
    suppressClickEdit = true
    suppressRowClickSelection = true
    suppressCellSelection = true
    rowSelection = 'multiple'
    enableColResize = true
    enableSorting = false
    enableServerSideSorting = true
    context = {
        componentParent: null
    }
    columnDefs = []
    rowData = []
    rowHeight = 40
    pinnedBottomRowData = []
    overlayLoadingTemplate = '<svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" ><circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>'
    overlayNoRowsTemplate = '<span class="no--data"></span>'
    onGridReady = (e) => {
        e.api.sizeColumnsToFit();
        e.api.showLoadingOverlay()
    }
    onRowDataChanged = (e) => {
        e.api.hideOverlay()
        if (e.api.getRenderedNodes().length == 0) {
            e.api.showNoRowsOverlay()
        }
    }
    onSelectionChanged = (e) => {}
    constructor(
        public componentParent: any
    ) {
        this.context.componentParent = componentParent
        this.onSelectionChanged = componentParent.onSelectionChanged.bind(componentParent)
    }

    onRowDoubleClicked(event){
        if (event.rowPinned == "bottom" || event.rowPinned == "top") {
            return
        }
        this.componentParent.enterFolder(event.data, event.node)
    }

    onRowClicked(event){
        if (event.node.isSelected()) {
            event.node.setSelected(false, false)
            return
        }
        this.componentParent.gridOptions.api.deselectAll();
        event.node.setSelected(true);
        if (this.componentParent.checkedRowId && this.componentParent.checkedRowObjectType) {
            this.componentParent.checkedRowId = event.data['jcr:path']
            this.componentParent.checkedRowObjectType = event.data['jcr:primaryType']
        }
    }

    onSortChanged(e){
        let sortInfo = e.api.getSortModel()[0]
        if (sortInfo) {
            this.componentParent.parameter.sortWay = sortInfo.sort
            this.componentParent.parameter.sortField = sortInfo.colId
        } else {
            this.componentParent.parameter.sortField = null
            this.componentParent.parameter.sortWay = null
        }
        this.componentParent.router.navigate([], { queryParams: this.componentParent.parameter });

    }

}
