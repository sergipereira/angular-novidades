import { Component } from "@angular/core";

@Component({
  selector: "nz-demo-drawer-basic-right",
  template: `
    <button nz-button nzType="primary" (click)="open()">What's new</button>
    <nz-drawer
      [nzClosable]="false"
      [nzVisible]="visible"
      nzPlacement="right"
      nzTitle="What's new in WEMOVIT"
      (nzOnClose)="close()"
      [nzWidth]="500"
    >
      <nz-card
        style="width:auto;background-color: rgb(238, 238, 238);"
        nzTitle="Execução de Treinos | 18 de Maio, 2020"
        [nzExtra]="extraTemplate"
      >
        <h2>Add an additional message to your Incoming Feedback widget 📣</h2>
        <h3>Are your users trying to reach you through your feedback widget?</h3>
        <p>Incoming Feedback is a great way to let your users share their feedback as they navigate your site. Because the widgets are so visible, they’re often the first place your users will go when they look for help. Many of you told us that you were getting support requests via Incoming Feedback. While this works for some of you, others prefer only receiving site-related feedback this way. With our latest update we’ve got a solution for every preference.</p>
      </nz-card><br>

      <nz-card
        style="width:auto;background-color: rgb(238, 238, 238);"
        nzTitle="Introducing Hotjar Guides 💡 | 25 de Maio, 2020"
        [nzExtra]="extraTemplate"
      >
        <h3>Helping you better understand user behavior, make the right changes, improve UX, and increase conversions on your website using Hotjar.</h3>
        <h5><nz-skeleton [nzActive]="true"></nz-skeleton></h5>
      </nz-card>
    </nz-drawer>
  `
})
export class NzDemoDrawerBasicRightComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}

import { formatDate } from "@angular/common";

formatDate(new Date(), "yyyy/MM/dd", "en");
