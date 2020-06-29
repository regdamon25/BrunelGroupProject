import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { MediaMatcher} from '@angular/cdk/layout';
import { Link } from '../link';
import { LinkDataService } from '../link-data.service';
import { slideInAnimation } from '../app.animation';



@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  animations: [slideInAnimation]
})
export class NavMenuComponent implements OnInit {
  mobileQuery: MediaQueryList;
 
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  
  private _mobileQueryListener: () => void;

  links: Link[];
  errorMessage = '';


  constructor(private linkDataService: LinkDataService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit(): void {
    this.linkDataService.getLinks().subscribe({
      next: links => {
        this.links = links;
      },
      error: err => this.errorMessage = err
    });
  }


}
