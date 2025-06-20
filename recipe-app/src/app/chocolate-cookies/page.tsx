"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { BedDouble } from "lucide-react";

export default function ChocolateCookiesPage() {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2">Chocolate Chip Cookies</h1>
        <p className="text-muted-foreground">
          Classic homemade cookies with a twist
        </p>
      </div>

      <Alert className="mb-6">
        <BedDouble />
        <AlertTitle>Baking Tips</AlertTitle>
        <AlertDescription>
          For best results, chill the dough for 30 minutes before baking. This
          prevents the cookies from spreading too much.
        </AlertDescription>
      </Alert>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Recipe Customization
            <Badge variant="secondary">Optional</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="gluten-free"
              checked={isGlutenFree}
              onCheckedChange={setIsGlutenFree}
            />
            <Label htmlFor="gluten-free">Gluten-free flour substitute</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="vegan" checked={isVegan} onCheckedChange={setIsVegan} />
            <Label htmlFor="vegan">Vegan (use plant-based butter & eggs)</Label>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ingredients</CardTitle>
          </CardHeader>
          <CardContent>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  Dry Ingredients
                  <span className="text-sm">▼</span>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    2 1/4 cups all-purpose flour{" "}
                    {isGlutenFree && "(or gluten-free flour)"}
                  </li>
                  <li>1 tsp baking soda</li>
                  <li>1 tsp salt</li>
                  <li>1/2 cup granulated sugar</li>
                  <li>1 cup brown sugar</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Separator className="my-4" />

            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  Wet Ingredients
                  <span className="text-sm">▼</span>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <ul className="list-disc ml-6 space-y-1">
                  <li>1 cup butter {isVegan && "(or plant-based butter)"}</li>
                  <li>2 large eggs {isVegan && "(or flax eggs)"}</li>
                  <li>2 tsp vanilla extract</li>
                  <li>2 cups chocolate chips</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Step 1: Mix Dry Ingredients</span>
                <Badge variant="outline">5 min</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Whisk together flour, baking soda, and salt in a bowl.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  Step 2: Cream Butter & Sugar
                </span>
                <Badge variant="outline">3 min</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Beat butter and sugars until light and fluffy.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Step 3: Add Eggs & Vanilla</span>
                <Badge variant="outline">2 min</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Beat in eggs one at a time, then add vanilla.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Step 4: Combine & Bake</span>
                <Badge variant="outline">12 min</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Mix in dry ingredients, fold in chocolate chips, and bake at
                375°F.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-6">
        <p className="text-muted-foreground">
          Enjoy your freshly baked chocolate chip cookies! 🍪
        </p>
      </div>
    </div>
  );
}
