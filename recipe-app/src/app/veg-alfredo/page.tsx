import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export default function VegAlfredoPage() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Veg Alfredo Recipe</h1>
      <Alert className="mb-6" variant="destructive">
        <AlertTitle>Allergy Warning</AlertTitle>
        <AlertDescription>
          This recipe contains dairy (milk, cheese, cream). Please substitute as
          needed for allergies.
        </AlertDescription>
      </Alert>
      <Tabs defaultValue="ingredients" className="mb-6">
        <TabsList>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
        </TabsList>
        <TabsContent value="ingredients">
          <Accordion type="single" collapsible>
            <AccordionItem value="main">
              <AccordionTrigger>Main Ingredients</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-6">
                  <li>200g fettuccine pasta</li>
                  <li>1 tbsp olive oil</li>
                  <li>
                    2 cups mixed vegetables (broccoli, bell pepper, carrots)
                  </li>
                  <li>2 cloves garlic, minced</li>
                  <li>1 cup heavy cream</li>
                  <li>1/2 cup grated parmesan cheese</li>
                  <li>Salt & pepper to taste</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="optional">
              <AccordionTrigger>Optional Add-ons</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-6">
                  <li>Chili flakes</li>
                  <li>Fresh parsley</li>
                  <li>Mushrooms</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="instructions">
          <Accordion type="single" collapsible>
            <AccordionItem value="step1">
              <AccordionTrigger>Step 1: Cook Pasta</AccordionTrigger>
              <AccordionContent>
                Boil fettuccine as per package instructions. Drain and set
                aside.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step2">
              <AccordionTrigger>Step 2: Sauté Veggies</AccordionTrigger>
              <AccordionContent>
                Heat olive oil in a pan. Add garlic and mixed vegetables. Sauté
                for 3-4 minutes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step3">
              <AccordionTrigger>Step 3: Make Alfredo Sauce</AccordionTrigger>
              <AccordionContent>
                Add cream to the pan, simmer for 2 minutes. Stir in parmesan
                cheese, salt, and pepper.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step4">
              <AccordionTrigger>Step 4: Combine & Serve</AccordionTrigger>
              <AccordionContent>
                Toss cooked pasta with sauce and veggies. Garnish with parsley
                or chili flakes if desired.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
      <Separator className="my-6" />
      <p className="text-center text-muted-foreground">
        Enjoy your creamy Veg Alfredo!
      </p>
    </div>
  );
}
