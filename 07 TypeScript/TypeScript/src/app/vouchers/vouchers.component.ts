import { VouchersService } from './voucher.service';
import { Router } from '@angular/router';
import { Voucher } from '../shared/model/model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {
  
  vouchers: Voucher[];
  
  constructor(private router: Router, private vs: VouchersService) {  }

  ngOnInit() {   
    this.vs.getVouchers().then(data => this.vouchers = data)
  }

  showVoucher(id: number){
    this.router.navigate(['/voucher/' + id]);
  }
}
