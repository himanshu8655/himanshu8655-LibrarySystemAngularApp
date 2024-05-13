import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environment';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-pg',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './checkout-pg.component.html',
  styleUrl: './checkout-pg.component.css'
})
export class CheckoutPgComponent implements OnInit{
  bookId:string=''
  months: number[] = Array.from({length: 12}, (_, i) => i + 1); // Creates an array [1, 2, 3, ..., 12]
constructor(private http:HttpClient,private route: ActivatedRoute,private router: Router){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const bookid = params['bookid'];
      this.bookId=bookid
      if (!bookid) {

        this.router.navigate([environment.HOME_PG]);
      }
    });
    }

purchase(event:Event){
  event.preventDefault();
this.http.get(environment.base_url+'/book/downlaod/'+this.bookId).subscribe(data=>{
  alert('Book downloaded successfully')
},err=>{
  alert("error processing request")
}
)
}
}
