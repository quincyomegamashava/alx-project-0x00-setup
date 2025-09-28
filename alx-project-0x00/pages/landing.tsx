import Card from "@/components/Card";

const Landing: React.FC =  () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
export default Landing
