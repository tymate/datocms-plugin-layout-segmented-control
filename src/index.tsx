import {
  connect,
  Field,
  FieldIntentCtx,
  RenderFieldExtensionCtx,
} from 'datocms-plugin-sdk';
import { render } from './utils/render';
import ConfigScreen from './entrypoints/ConfigScreen';
import 'datocms-react-ui/styles.css';
import SideSelectField from './entrypoints/SideSelectField';

connect({
  overrideFieldExtensions(field: Field, ctx: FieldIntentCtx) {
    if (field.attributes.api_key === 'layout') {
      return {
        editor: {
          id: 'sideSelect',
        },
      };
    }
  },

  renderFieldExtension(fieldExtensionId: string, ctx: RenderFieldExtensionCtx) {
    switch (fieldExtensionId) {
      case 'sideSelect':
        return render(<SideSelectField ctx={ctx} />);
      default:
        return null;
    }
  },

  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
});
