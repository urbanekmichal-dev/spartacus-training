import { Component, Inject, isDevMode, OnInit } from '@angular/core';
import { Config } from '@spartacus/core';

@Component({
  selector: 'app-display-config',
  templateUrl: './display-config.component.html',
  styleUrls: ['./display-config.component.scss']
})
export class DisplayConfigComponent implements OnInit {

  isDevelopmentMode: boolean = isDevMode();

  constructor(
    @Inject(Config) public globalConfig: Config
  ) { 
    if (this.isDevelopmentMode)
     {
      console.debug(globalConfig);
     }
  }

  ngOnInit(): void {
  }

}
