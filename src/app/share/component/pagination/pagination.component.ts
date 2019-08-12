import { Component, Input, OnChanges, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'my-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class MyPaginationComponent implements OnInit, OnChanges {
    routerSubscription : any 
    page : any = undefined
    @Input() isSelectAll: boolean = false;
    @Input() totalElement: number = 0;
    @Input() currentPage: number = 1;
    @Output() selectAll : EventEmitter<any> = new EventEmitter();
    pageCount : Array<number> = [1];
    constructor(
        private route : ActivatedRoute,
        private router: Router
    ) {
        
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params=>{
            this.isSelectAll = params.isSelectAll ==  'true' ? true : false      
            console.log(this.isSelectAll)     
        })
     }
    ngOnChanges() {
        this.currentPage = this.currentPage*1        
        this.pageCount = []
        let pageCount = 1 + Math.floor(this.totalElement/50)
        for(let i = 1;i<=pageCount;i++){
            this.pageCount.push(i)
        }
    }

    changePage(e?) {
        this.router.navigate([],{queryParams:{currentPage:this.currentPage,totalElement:this.totalElement,isSelectAll:this.isSelectAll},queryParamsHandling:'merge'})
    }
}
