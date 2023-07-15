import type { LitElement, PropertyValues } from "lit";
import { APP_NAME } from "../constants.ts";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
type TypedConstructor<T = {}> = new (...args: any[]) => T;
type LitConstructor = TypedConstructor<LitElement>;

export const pageTitle =
  <T extends LitConstructor>(title: string) =>
  (constructor: T): T => {
    return class extends constructor {
      override async firstUpdated(
        _changeProperties: PropertyValues,
      ): Promise<void> {
        super.firstUpdated(_changeProperties);
        document.title = [APP_NAME, title].join(" - ");
      }
    };
  };

export const subTitle =
  <T extends LitConstructor>(subtitle: string) =>
  (constructor: T): T => {
    return class extends constructor {
      override async firstUpdated(
        _changeProperties: PropertyValues,
      ): Promise<void> {
        super.firstUpdated(_changeProperties);
        document.title = [subtitle, APP_NAME].join(" - ");
      }
    };
  };
