import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { ClientFeedbackHeader } from './ClientFeedbackHeader';
import { ClientProfile } from './ClientProfile';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full" aria-labelledby="client-feedback-heading">
      <ClientFeedbackHeader />

      {/* Top: two-column responsive layout */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column: stacked testimonial cards */}
        <div className="space-y-6">
          <TestimonialCard
            quote="My coach helped me restructure my salary and save ₹30,000 more every year. That's peace of mind."
            clientName="Shreya M."
            clientTitle="Fintech Startup Employee"
            clientAvatar="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/1ea97b82a0035a61a06161b2bbead4d6e704e8d5?placeholderIfAbsent=true"
            badgeText="Employee Testimonial"
            badgeColor="rgba(5,147,252,1)"
          />

          <TestimonialCard
            quote="We used to get endless salary-related queries. Finsage solved that in just 3 sessions."
            clientName="Nikhil R."
            clientTitle="HR Head, SaaS Company"
            clientAvatar="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/1ea97b82a0035a61a06161b2bbead4d6e704e8d5?placeholderIfAbsent=true"
            badgeText="HR Testimonial"
            badgeColor="rgba(248,90,31,1)"
          />
        </div>

        {/* Right column: description + illustration with floating stat card */}
        <div className="flex flex-col gap-6">
          <p className="text-black text-[19px] font-normal leading-8">
            Discover what our clients have to say about their experiences with us and learn how our services have positively impacted their life.
          </p>
          <div className="relative">
            <div className="absolute right-4 -top-6 bg-white shadow-[4px_3px_0px_rgba(0,0,0,1)] z-10 text-2xl text-black font-semibold leading-none px-6 py-4 rounded-[5px] border-black border-2">
              <div>50k+ Satisfy client's</div>
            </div>
            <div className="bg-[rgba(20,186,140,1)] rounded-[34px] p-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/df0a2303d2d30ac60dfae2e86307df91ca124bcd?placeholderIfAbsent=true"
                alt="Happy clients illustration"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom grid of testimonials */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        <div className="bg-white flex flex-col items-center justify-center rounded-[13px] border-r-4 border-b-4 border-black border-t border-l py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/c73d8b4c0ad8ed72aad846ea44ac4d1682d73eca?placeholderIfAbsent=true"
            alt="Star rating"
            loading="lazy"
            className="object-contain w-[116px] h-auto"
          />
        </div>

        <article className="bg-white flex flex-col text-black px-[38px] py-[41px] rounded-[13px] border-r-4 border-b-4 border-black border-t border-l">
          <blockquote className="text-2xl font-medium leading-[43px]">
            "Finsage helped me shift from salary stress to savings joy — in just two sessions."
          </blockquote>
          <img
            src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/bd1398d796ce60616fe36e7f29df097348740e7d?placeholderIfAbsent=true"
            alt="5 star rating"
            loading="lazy"
            className="aspect-[500] object-contain w-full self-stretch mt-[51px] max-md:max-w-full max-md:mt-10"
          />
          <div className="mt-[25px]">
            <ClientProfile
              name="Priya K."
              title="Tech Professional"
              avatar="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/4d4f036479723780418190bc61eee65f94f8614c?placeholderIfAbsent=true"
              className="text-[17px] font-normal leading-[26px]"
            />
          </div>
        </article>

        <article className="bg-white flex flex-col items-stretch text-black px-[38px] py-[41px] rounded-[13px] border-r-4 border-b-4 border-black border-t border-l">
          <blockquote className="text-2xl font-medium leading-[43px] max-md:max-w-full">
            Our consultancy, with limited marketing resources, hesitated to hire agencies offering generic service packages.
          </blockquote>
          <img
            src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/7509abf4dc688b7f28d5de384d7c2fb49661b605?placeholderIfAbsent=true"
            alt="5 star rating"
            loading="lazy"
            className="aspect-[500] object-contain w-full mt-[51px] max-md:max-w-full max-md:mt-10"
          />
          <div className="mt-[25px]">
            <ClientProfile
              name="Anurag M."
              title="CHRO, BFSI Company"
              avatar="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/4d4f036479723780418190bc61eee65f94f8614c?placeholderIfAbsent=true"
              className="text-[17px] font-normal leading-[26px]"
            />
          </div>
        </article>

        <article className="bg-white flex flex-col text-black px-[38px] py-[41px] rounded-[13px] border-r-4 border-b-4 border-black border-t border-l">
          <blockquote className="text-2xl font-medium leading-[43px]">
            Our consultancy, with limited marketing resources, hesitated to hire agencies offering generic service packages.
          </blockquote>
          <img
            src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/f8e0ce7855d66cb715bd632a9dfb499e94a90443?placeholderIfAbsent=true"
            alt="Star rating"
            loading="lazy"
            className="object-contain w-[111px] mt-[51px] max-md:mt-10"
          />
          <div className="mt-[25px] flex items-center gap-3">
            <img
              src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/4d4f036479723780418190bc61eee65f94f8614c?placeholderIfAbsent=true"
              alt="Anurag M. profile"
              loading="lazy"
              className="aspect-[1.02] object-contain w-14 rounded-[43px]"
            />
            <div>
              <div className="font-semibold text-[15px] leading-[22px] text-black">Anurag M.</div>
              <div className="text-[14px] leading-[24px] text-black">CHRO, BFSI Company</div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
