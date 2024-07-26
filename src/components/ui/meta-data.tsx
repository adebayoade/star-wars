import { Meta } from '@/constants/meta-data';
import { Helmet } from 'react-helmet';

type MetaDataProps = {
  title?: string;
  description?: string;
};
export default function MetaData({
  title = Meta.title,
  description = Meta.description,
}: MetaDataProps) {
  return (
    <Helmet>
      {title && (
        <title>
          {title} | {Meta.title}
        </title>
      )}
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
