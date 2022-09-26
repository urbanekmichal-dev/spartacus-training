import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, PageMetaConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";


export const translationOverwrites = {
  en: {
    common: {
      searchBox: {
        placeholder: "You can search here...",
      }
    }
  },
  de: {
    common: {
      searchBox: {
        placeholder: "Sie können hier suchen ...",
      }
    }
  },
};

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443', prefix: '/occ/v2/'
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD', 'JPY'],
      language: ['en', 'de', 'ja', 'zh'],
      baseSite: ['electronics-spa'],
    },
  }),
  provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }),
  provideConfig(<I18nConfig>{
    i18n: {
      resources: translationOverwrites,
    },
  }),
  provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  }),
  provideConfig(<PageMetaConfig>{
    pageMeta: {
      resolvers: [
        {
          property: 'title',
          method: 'resolveTitle'
        },
        {
          property: 'heading',
          method: 'resolveHeading'
        },
        {
          property: 'breadcrumbs',
          method: 'resolveBreadcrumbs'
        },
        {
          property: 'description',
          method: 'resolveDescription',
          disabledInCsr: false,
        },
        {
          property: 'title',
          method: 'resolveTitle'
        },
        {
          property: 'image',
          method: 'resolveImage',
          disabledInCsr: true
        },
        {
          property: 'robots',
          method: 'resolresolveRobotsveImage',
          disabledInCsr: false,
        },
        {
          property: 'canonicalUrl',
          method: 'resolveCanonicalUrl',
          disabledInCsr: true
        },
      ]
    }
  })]
})
export class SpartacusConfigurationModule { }
