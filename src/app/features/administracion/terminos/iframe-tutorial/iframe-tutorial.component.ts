import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './iframe-tutorial.component.html',
  styleUrl: './iframe-tutorial.component.css',
})
export class IframeTutorialComponent implements OnChanges, OnInit {
  @Input('url') url: string = '';
  public sanitizedUrl!: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  ngOnChanges() {
    if (this.url) {
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.url
      );
    }
  }
}
