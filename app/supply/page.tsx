import SupplyPageClient from './page-client';

export const metadata = {
    description: `Overview of the native token supply on Turboflow`,
    title: `Supply Overview | Turboflow`,
};

export default function SupplyPage() {
    return <SupplyPageClient />;
}
