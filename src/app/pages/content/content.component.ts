import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  @Input() photoCover!:string;
  @Input() contentTitle!:string;
  @Input() contentDescription!:string;
  private id!:string | null ;

  constructor(private route:ActivatedRoute) {
   }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get('id'))
    this.setValuesToComponent(this.id!);
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(article => article.id.toString() === id)[0];
    if(result){
      this.photoCover = result.photo;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
  }

}
