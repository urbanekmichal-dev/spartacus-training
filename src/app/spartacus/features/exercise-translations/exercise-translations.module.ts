import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayI18nMessagesComponent } from './display-i18n-messages/display-i18n-messages.component';
import { GlobalMessageService, GlobalMessageType, I18nConfig, I18nModule, provideConfig, TranslationService } from '@spartacus/core';
import { IconModule, OutletRefModule } from '@spartacus/storefront';
import { filter } from 'rxjs/operators';

const messageType = GlobalMessageType.MSG_TYPE_INFO;

export function i18nMessagesFactory(
  translationService: TranslationService,
  messageService: GlobalMessageService
){
  return (): Promise<any> => {
    translationService.translate('customFeature.example', {param1: 1})
    .pipe(filter(l => !l.startsWith('[')))
    .subscribe(l => messageService.add(`Custom label added: ${1}`,messageType));
    return Promise.resolve();
  }
}

@NgModule({
  declarations: [
    DisplayI18nMessagesComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    OutletRefModule,
    IconModule,
  ],
  exports: [DisplayI18nMessagesComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: i18nMessagesFactory,
      deps: [TranslationService, GlobalMessageService],
      multi: true,
    },
    provideConfig(<I18nConfig>{
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json'
        },
        chunks: {
          custom: ['customFeature'],
        }
      }
    })
  ]
})
export class ExerciseTranslationsModule { }
