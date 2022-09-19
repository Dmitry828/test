import { WrapperLoader } from "./styled";
import {ReactComponent as LoaderIcon} from '../../assets/images/loader.svg';

export const Loader = () => {
  return (
    <WrapperLoader>
      <LoaderIcon/>
    </WrapperLoader>
  );
};