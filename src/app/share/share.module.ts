import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
//angular material 模块
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import {MatStepperModule} from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
//ant design模块
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

//自定义模块
import { MenuItems } from './class/menu-items/menu-items';
import { BreadCrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { FormUploadComponent } from './component/formUpload/formUpload.component';
import { LoadingMessageComponent } from './component/loadingMessage/loadingMessage.component';
import { MyPaginationComponent } from './component/pagination/pagination.component';
import { RecordInfoComponent } from './component/record-info/record-info.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ZTreeComponent } from './component/z-tree/z-tree.component';
import { ImagePreview } from './directive/image-preview.directive';
import { InitTableValueDirective } from './directive/initTableValue.directive';
import { fileNameToIconfilter } from './pipe/fileNameToIcon.pipe';
import { Sizefilter } from './pipe/size.pipe';
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'input',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export class AppDateAdapter extends NativeDateAdapter {
  format(date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    }
    return date.toDateString();
  }
  parse(value) {
    return null
  }
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule, MatGridListModule,
    FormsModule, ReactiveFormsModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    FileUploadModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatCardModule,NzProgressModule,
    NzNotificationModule,NzTreeSelectModule,
    MatDatepickerModule, MatRadioModule,
    MatNativeDateModule, MatExpansionModule,
    NzDatePickerModule,MatStepperModule
  ],
  exports: [
    CommonModule,NzNotificationModule,NzTreeSelectModule,
    HttpModule,
    JsonpModule, ImagePreview, RecordInfoComponent,
    FormsModule, ReactiveFormsModule, MatRadioModule,
    RouterModule,
    MatStepperModule,
    LoadingMessageComponent,
    SpinnerComponent, ZTreeComponent,
    Sizefilter, FormUploadComponent, fileNameToIconfilter, InitTableValueDirective, 
    MatProgressSpinnerModule, BreadCrumbComponent, 
    MatDialogModule,  MyPaginationComponent,
    MatCheckboxModule, 
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,NzProgressModule,
    FileUploadModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTreeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    MenuItems,
    // { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' }
    // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  entryComponents: [],
  declarations: [RecordInfoComponent,InitTableValueDirective, ImagePreview, LoadingMessageComponent, Sizefilter, fileNameToIconfilter, FormUploadComponent, SpinnerComponent, ZTreeComponent, BreadCrumbComponent, MyPaginationComponent]
})
export class ShareModule { }
