import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Splash App</h1>
        <p className="text-gray-600 mt-4">
          Modern Next.js layout using the DRY principle.
        </p>
      </div>
    </Layout>
  );
}
