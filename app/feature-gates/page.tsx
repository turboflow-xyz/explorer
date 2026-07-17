import FeatureGatesPageClient from './page-client';

export const metadata = {
    description: `Overview of the feature gates on Turboflow`,
    title: `Feature Gates | Turboflow`,
};

export default function FeatureGatesPage() {
    return <FeatureGatesPageClient />;
}
