import { Helmet } from 'react-helmet';

type MetaDataProps = {
  title?: string,
  description?: string
}
export default function MetaData({
  title = 'Enyata Frontend Test',
  description = 'Frontend Developer assessment by Aderibigbe Adebayo',
}: MetaDataProps) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
