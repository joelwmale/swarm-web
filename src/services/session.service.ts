import { CONFIG } from '../config';

interface IPayload {
  [key: string]: any;
}

class Session {
  payload: IPayload;
  timeoutId: number = 0;

  constructor() {
    this.payload = this.hydrate();
  }

  has(key: string) {
    return key in this.payload;
  }

  get(key: string) {
    return this.has(key) ? this.payload[key] : null;
  }

  set(key: string, val: any) {
    this.payload[key] = val;
    this.sync(this.payload);
  }

  populate(object: any) {
    for (const key in object) {
      this.payload[key] = object[key];
    }
    this.sync(this.payload);
  }

  hydrate() {
    const jsonPayload = localStorage.getItem(this.key);

    if (jsonPayload) {
      try {
        return JSON.parse(jsonPayload);
      } catch (e) {
        this.sync({});
      }
    }

    return {};
  }

  sync(payload: IPayload) {
    try {
      localStorage.setItem(this.key, JSON.stringify(payload));
    } catch (e) {
      // ...
    }
  }

  destroy(key: string) {
    this.payload = {};
    localStorage.setItem(key, JSON.stringify({}));
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  get key() {
    return CONFIG.sessionKey();
  }

  /**
   * Helpers.
   *
   * @return {var}
   */
  loggedInForType(type: string): boolean {
    return this.key.includes(type) && this.has('access_token');
  }

  /**
   * Getters.
   *
   * @return {var}
   */
  get fullName(): string {
    return `${this.get('first_name')} ${this.get('last_name')}`;
  }
}

export const session = new Session();
