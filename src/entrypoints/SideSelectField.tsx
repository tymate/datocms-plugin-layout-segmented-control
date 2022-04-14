import { RenderFieldExtensionCtx } from 'datocms-plugin-sdk';
import { ButtonGroup, ButtonGroupButton, Canvas } from 'datocms-react-ui';
import { get } from 'lodash';

type SideSelectFieldProps = {
  ctx: RenderFieldExtensionCtx;
};

const SideSelectField = ({ ctx }: SideSelectFieldProps) => {
  const { fieldPath, setFieldValue, formValues } = ctx;
  const fieldValue = get(formValues, fieldPath);

  return (
    <Canvas ctx={ctx}>
      <ButtonGroup>
        <ButtonGroupButton
          onClick={() => setFieldValue(fieldPath, 'left')}
          selected={fieldValue === 'left'}
        >
          Image à gauche
        </ButtonGroupButton>
        <ButtonGroupButton
          onClick={() => setFieldValue(fieldPath, 'right')}
          selected={fieldValue === 'right'}
        >
          Image à droite
        </ButtonGroupButton>
      </ButtonGroup>
    </Canvas>
  );
};

export default SideSelectField;
