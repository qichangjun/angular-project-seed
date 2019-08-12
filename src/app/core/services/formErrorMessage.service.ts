import { Injectable } from '@angular/core';

@Injectable()
export class FormErrorMessageService {
  constructor() { }
  getErrorMessage(info){
    return info.hasError('required') ? '不能为空' :
            info.hasError('minlength') ? '长度过短' :
            info.hasError('email') ? '格式不正确' :            
            info.hasError('notSame') ? '两次密码不一致' :            
            info.hasError('pattern') ? '格式从不正确' :
            info.hasError('isBottomValidator') ? '清选择最下层门类/分类' :            
            '';
  }
}
