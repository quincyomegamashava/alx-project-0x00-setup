import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3 items-center">
          {/* Sizes */}
          <Button title="Small" styles="text-sm px-3 py-1 rounded-sm" />
          <Button title="Medium" styles="text-base px-4 py-2 rounded-sm" />
          <Button title="Large" styles="text-lg px-6 py-3 rounded-sm" />
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          {/* Shapes */}
          <Button title="rounded-sm" styles="text-base px-4 py-2 rounded-sm" />
          <Button title="rounded-md" styles="text-base px-4 py-2 rounded-md" />
          <Button title="rounded-lg" styles="text-base px-4 py-2 rounded-lg" />
          <Button title="rounded-full" styles="text-base px-4 py-2 rounded-full" />
        </div>
      </section>
    </div>
  )
}
export default Landing
