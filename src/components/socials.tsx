import { Button } from "@/components/ui/button";
import { IconMap } from "./icon-map";
import { portfolioConfig } from "@/config/portfolio.config";
import { ContactButton, ContactFloat } from "./cal";


export const Socials = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ContactButton />
      <ContactFloat />
      {/* <Button
  variant="outline"
  className="active:border-b bg-black text-white active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
  asChild
>
  <a href="tel:+919279010410" title="Contact Sajid Hussain">
    Contact
  </a>
</Button> */}

      <Button
        variant="outline"
        className="active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
        asChild
      >
        <a href={portfolioConfig.resume} target="_blank">
          Resume
        </a>
      </Button>
      {Object.keys(portfolioConfig.links).map((key: string, index: number) => {
        const link =
          portfolioConfig.links[key as keyof typeof portfolioConfig.links];
        return (
          <Button
            key={key}
            size="icon"
            variant="outline"
            className="active:border-b active:scale-[0.97] hover:border-[0.2px] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
            asChild
          >
            <a href={link} target="_blank">
              {IconMap[key as keyof typeof IconMap]}
              <span className="sr-only">{`${key} - ${link}`}</span>
            </a>
          </Button>
        );
      })}
    </div>
  );
};
