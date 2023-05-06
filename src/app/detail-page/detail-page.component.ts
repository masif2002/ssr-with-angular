import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SeoService } from '../services/seo.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit, OnDestroy {
  customerId: string
  customer: Observable<any>
  actualCustomer: any
  subscription: any

  constructor (
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get('id') as string

    this.customer = this.db
    .collection('customers')
    .doc<any>(this.customerId)
    .valueChanges()
    .pipe(
      tap(
        cust => this.seo.generateTags({
          title: cust.name,
          description: cust.bio,
          image: cust.image
        })
      )
    )

    this.subscription = this.customer.subscribe( c =>{
      this.actualCustomer = c
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.actualCustomer = null
  }
}
