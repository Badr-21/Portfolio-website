import { forwardRef } from "react";

const ContactMe = forwardRef(function ContactMe(props, contactMeRef) {
   return (
      <section ref={contactMeRef} className="h-[50rem]">
         ContactMe
      </section>
   );
});

export default ContactMe;
