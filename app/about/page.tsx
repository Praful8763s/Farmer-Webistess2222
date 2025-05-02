import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Us</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Learn more about our mission to connect local farmers with consumers for a sustainable food system.
        </p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="mission">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="story">Our Story</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="approach">Our Approach</TabsTrigger>
          </TabsList>
          <TabsContent value="mission" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-muted-foreground mb-4">
                      At Local Farmer Marketplace, our mission is to create a sustainable and equitable food system by
                      connecting local farmers directly with consumers. We believe in:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Supporting small-scale, local agriculture</li>
                      <li>Reducing food miles and environmental impact</li>
                      <li>Ensuring fair prices for farmers</li>
                      <li>Providing consumers with fresh, seasonal produce</li>
                      <li>Building stronger, more resilient local communities</li>
                    </ul>
                  </div>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=600&width=800"
                      alt="Farmers working in a field"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="story" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=600&width=800"
                      alt="The founding team at a farmers market"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                    <p className="text-muted-foreground mb-4">
                      Local Farmer Marketplace began in 2020 when a group of agricultural enthusiasts noticed the
                      disconnect between local farmers and urban consumers. Despite India's rich agricultural heritage,
                      small farmers struggled to get fair prices while consumers had limited access to fresh, local
                      produce.
                    </p>
                    <p className="text-muted-foreground">
                      Starting with just 10 farmers in Gujarat, we've grown to support hundreds of farmers across
                      multiple states, connecting them directly with consumers who value fresh, locally-grown food. Our
                      platform has helped farmers increase their income by up to 40% while providing consumers with
                      access to the freshest produce available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="team" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      name: "Payal Prajapati",
                      role: "Founder & CEO",
                      bio: "Agricultural economist with a passion for sustainable farming practices.",
                      image: "/placeholder.svg?height=200&width=200",
                    },
                    {
                      name: "Raj Sharma",
                      role: "Head of Farmer Relations",
                      bio: "Former farmer with 15 years of experience in organic agriculture.",
                      image: "/placeholder.svg?height=200&width=200",
                    },
                    {
                      name: "Anita Desai",
                      role: "Technology Director",
                      bio: "Tech innovator focused on creating accessible platforms for rural communities.",
                      image: "/placeholder.svg?height=200&width=200",
                    },
                  ].map((member) => (
                    <div key={member.name} className="flex flex-col items-center text-center">
                      <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <p className="text-sm mt-2">{member.bio}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="approach" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Our Agile Approach</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Agile Development</h3>
                    <p className="text-muted-foreground mb-4">
                      We follow Agile methodology to continuously improve our platform based on farmer and consumer
                      feedback. Our development process includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Two-week sprint cycles</li>
                      <li>Regular stakeholder feedback sessions</li>
                      <li>Continuous integration and deployment</li>
                      <li>Iterative feature development</li>
                      <li>Cross-functional teams</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Sustainable Business Model</h3>
                    <p className="text-muted-foreground mb-4">
                      Our business model is designed to be sustainable for all stakeholders:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fair commission structure that benefits farmers</li>
                      <li>Transparent pricing for consumers</li>
                      <li>Investment in rural infrastructure</li>
                      <li>Education and training for farmers</li>
                      <li>Community-building initiatives</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
