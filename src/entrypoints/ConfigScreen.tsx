import { RenderConfigScreenCtx } from 'datocms-plugin-sdk';
import { Canvas } from 'datocms-react-ui';

type Props = {
  ctx: RenderConfigScreenCtx;
};

export default function ConfigScreen({ ctx }: Props) {
  return (
    <Canvas ctx={ctx}>
      This plugins offers no settings. Its purpose is to replace the fields
      whose ids are layout to a segmented control field with left
    </Canvas>
  );
}
