import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  dealsofDay:any=[
    {

    imgsrc:'https://rukminim1.flixcart.com/image/200/200/kk2wl8w0/computer/z/u/5/hp-original-imafzgdgcbtxvjka.jpeg?q=70',
    header:'Best Deals on HP',
    subHeader:'From 22900 Rs',
    description:'Upto 6 months NCEMI',
    button:'view all' 
    },
    {

      imgsrc:'https://rukminim1.flixcart.com/image/200/200/kk2wl8w0/computer/z/u/5/hp-original-imafzgdgcbtxvjka.jpeg?q=70',
      header:'Best Deals on HP',
      subHeader:'From 22900 Rs',
      description:'Upto 6 months NCEMI' 
      },
      {

        imgsrc:'https://rukminim1.flixcart.com/image/200/200/kk2wl8w0/computer/z/u/5/hp-original-imafzgdgcbtxvjka.jpeg?q=70',
        header:'Best Deals on HP',
        subHeader:'From 22900 Rs',
        description:'Upto 6 months NCEMI' 
        },
        {

          imgsrc:'https://rukminim1.flixcart.com/image/200/200/kk2wl8w0/computer/z/u/5/hp-original-imafzgdgcbtxvjka.jpeg?q=70',
          header:'Best Deals on HP',
          subHeader:'From 22900 Rs',
          description:'Upto 6 months NCEMI' 
          },
          {

            imgsrc:'https://rukminim1.flixcart.com/image/200/200/kk2wl8w0/computer/z/u/5/hp-original-imafzgdgcbtxvjka.jpeg?q=70',
            header:'Best Deals on HP',
            subHeader:'From 22900 Rs',
            description:'Upto 6 months NCEMI' 
            },
            {

              imgsrc:'https://rukminim1.flixcart.com/image/200/200/kk2wl8w0/computer/z/u/5/hp-original-imafzgdgcbtxvjka.jpeg?q=70',
              header:'Best Deals on HP',
              subHeader:'From 22900 Rs',
              description:'Upto 6 months NCEMI' 
              },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
