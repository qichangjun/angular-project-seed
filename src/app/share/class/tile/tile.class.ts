import * as _ from 'lodash';
import { isArray } from 'util';
export class Tile {
    defaultOptions: TileOptions = {
        required : 'false',
        labelName: '',
        contentType: 'label',
        cols: 3,
        rows: 5,
        style: {
            'text-align': 'left',
            'fontSize' : 14,
            'inputBorder' : '' 
        }

    }
    constructor(
        public options?: TileOptions
    ) {
        this.options = _.merge(this.defaultOptions, this.options || {})
        this.init()
    }

    init() {
        switch (this.options.contentType) {
            case 'label':
                if(!isArray(this.options.labelName)){                                  
                    if (typeof(this.options.labelName) == 'string'){
                        this.options.labelName = [{type:'text',value:this.options.labelName}]
                    }else{
                        this.options.labelName = [{type:this.options.labelName['type'],value:this.options.labelName['value']}]
                    }
                    
                }
                break;
            case 'radio-button':
                this.options['radioBtnAttrs'] = this.options['radioBtnAttrs'] ? _.castArray(this.options['radioBtnAttrs']) : []
                break;
            case 'check-box':
                this.options['checkBoxAttrs'] = this.options['checkBoxAttrs'] ? _.castArray(this.options['checkBoxAttrs']) : []
                break;
            case 'select':               
                if (this.options['selectAttrs']){
                    let selectAttrs = []
                    this.options['selectAttrs'] = _.castArray(this.options['selectAttrs'])
                    this.options['selectAttrs'].forEach(c=>{
                        if (typeof(c) == 'string'){
                            selectAttrs.push({displayName : c,value:c})
                        }else{
                            selectAttrs.push(c)
                        }
                    })
                    this.options['selectAttrs'] = selectAttrs
                }else{
                    this.options['selectAttrs'] = []
                }
                break;
            case 'table':
                this.options['tableAttrs'] = this.options['tableAttrs'] ? _.castArray(this.options['tableAttrs']) : []
                break;
            case 'upload':
                this.options.cols = this.options.cols || 12
                break;
            default:
                break;
        }
    }

    changeContentType(contentType) {  
        switch (contentType) {
            case 'label':
                this.options.labelName = [{type:'text',value:'标题'}]
                break;
            case 'input':
                this.options.attrName = ''
                this.options.style.inputBorder = ''
                break;
            case 'radio-button':
                this.options.attrName = ''
                this.options.radioBtnAttrs = []
                break;
            case 'check-box':
                this.options.attrName = ''
                this.options.checkBoxAttrs = []
                break;
            case 'text-area':
                this.options.attrName = ''
                this.options.style.inputBorder = ''
                break;
            case 'select':
                this.options.attrName = ''
                this.options.selectAttrs = []
                this.options.style.inputBorder = ''
                break;
            case 'table':
                this.options.attrName = ''
                this.options.tableAttrs = []
                break;
            case 'upload':
                this.options.attrName = ''
                this.options.fileDisplayName = ''
                break;
            case 'logo':
                this.options.attrName = ''
                break;
            case 'date':
                this.options.attrName = ''
                this.options.style.inputBorder = ''
        }       
    }

    getStyle(property) {
        return this.options.style[property]
    }

    setStyle(property, value) {
        this.options.style[property] = value
    }

    setCols(containerWidth,eleWidth){
        let newCols = Math.round((eleWidth/containerWidth)*12)        
        newCols = newCols == 0 ? 1 : newCols
        this.options.cols = newCols >= 12 ? 12 : newCols
    }

    setRows(eleHeight){
        let newRows = Math.round(eleHeight / 20 )
        newRows = newRows == 0 ? 1 : newRows
        this.options.rows = Math.round(newRows)        
    }

    hasError() {
        if (this.options.contentType !== 'process-list' && this.options.contentType !== 'logo' && this.options.contentType !== 'label' && !this.options.attrName){
            if (this.options.contentType == 'upload'){
                return '请选择一个file类型，若没有，请先创建'
            }
            return true
        }
        if (this.options.contentType == 'check-box'){                        
            return this.options.checkBoxAttrs.find((c)=> {
                if(!c){
                    c = ''
                }
                c = c.toString()
                return c.trim() == ''
            }) != undefined
        }
        if (this.options.contentType == 'radio-button'){                        
            return this.options.radioBtnAttrs.find((c)=> {
                if(!c){
                    c = ''
                }
                c = c.toString()
                return c.trim() == ''
            }) != undefined
        }
        if (this.options.contentType == 'select'){                        
            return this.options.selectAttrs.find((c)=> {
                if(!c){
                    c = ''
                }
                c = c.toString()
                return c.trim() == ''
            }) != undefined
        }
        return false
    }

    toggleFontWeight(event){        
        this.options.style.fontWeight ? this.options.style.fontWeight = '' : this.options.style.fontWeight = 'bold'
    }
    toggleInputBorder(event){
        this.options.style.inputBorder && this.options.style.inputBorder == 'show'  ? this.options.style.inputBorder = '' : this.options.style.inputBorder = 'show'
    }

    toggleRequired(event){
        !this.options.required || this.options.required == 'false' ? this.options.required = 'true' : this.options.required = 'false'
    }
}

export interface TileOptions {
    required ? : string,
    labelName?: string | Array<any>,
    cols?: number,
    rows?: number,
    contentType?: 'label' | 'input' | 'radio-button' | 'check-box' | 'text-area' | 'select' | 'upload' | 'date' | 'process-list' | 'table' | 'logo',
    style?: {
        'text-align'?: 'left' | 'center' | 'right' | '',
        'fontColor'?: string,
        'backgroundColor'?: string,
        'fontSize'? : number,
        'fontWeight'? : string,
        'border-left'? : string,
        'border-right'? :string,
        'border-top'? :string,
        'border-bottom'? :string,
        'inputBorder'? : string 
    },
    fileDisplayName?: string,
    attrName?: string,
    radioBtnAttrs?: Array<string>
    checkBoxAttrs?: Array<string>
    selectAttrs?: Array<any>
    tableAttrs?: Array<any>
    logoSrc?:string
}
