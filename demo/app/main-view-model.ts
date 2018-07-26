import { Observable } from 'tns-core-modules/data/observable';
import { CookiemanagerNsPlugin } from 'nativescript-cookiemanager-ns-plugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private cookiemanagerNsPlugin: CookiemanagerNsPlugin;

  constructor() {
    super();

    this.cookiemanagerNsPlugin = new CookiemanagerNsPlugin();
    this.message = this.cookiemanagerNsPlugin.message;
  }
}
