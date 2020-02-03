import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() manageSidebar: boolean;
  @Input() userId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params =>{
    //   this.userId = +params['userId'];
    // });

    //this.userId = +this.route.snapshot.paramMap.get('userId');
  }

}
