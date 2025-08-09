import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { ClientFeedbackHeader } from './ClientFeedbackHeader';
import { ClientProfile } from './ClientProfile';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="flex items-stretch gap-[40px_100px]">
      <div className="text-black text-2xl font-medium leading-[43px] mt-[1197px] max-md:mt-10">
        "Finsage helped me shift from salary stress to savings joy — in just two sessions."
      </div>
      
      <div className="flex w-full flex-col items-center rounded-[0px_0px_0px_0px] max-md:max-w-full">
        <ClientFeedbackHeader />
        
        <div className="w-full max-w-[1205px] mt-[93px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <div className="grow text-black max-md:max-w-full max-md:mt-10">
                <TestimonialCard
                  quote="My coach helped me restructure my salary and save ₹30,000 more every year. That's peace of mind."
                  clientName="Shreya M."
                  clientTitle="Fintech Startup Employee"
                  clientAvatar="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/1ea97b82a0035a61a06161b2bbead4d6e704e8d5?placeholderIfAbsent=true"
                  badgeText="Employee Testimonial"
                  badgeColor="rgba(5,147,252,1)"
                />
                
                <div className="mt-[62px] max-md:mt-10">
                  <TestimonialCard
                    quote="We used to get endless salary-related queries. Finsage solved that in just 3 sessions."
                    clientName="Nikhil R."
                    clientTitle="HR Head, SaaS Company"
                    clientAvatar="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/1ea97b82a0035a61a06161b2bbead4d6e704e8d5?placeholderIfAbsent=true"
                    badgeText="HR Testimonial"
                    badgeColor="rgba(248,90,31,1)"
                  />
                </div>
              </div>
            </div>
            
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <p className="text-black text-[19px] font-normal leading-8 mr-[39px] max-md:max-w-full max-md:mr-2.5">
                  Discover what our clients have to say about their experiences with us and learn how our services have positively impacted their life.
                </p>
                
                <div className="bg-white shadow-[4px_3px_0px_rgba(0,0,0,1)] z-10 text-2xl text-black font-semibold leading-none mt-[15px] pt-[27px] pb-[71px] px-[23px] rounded-[5px] border-black border-solid border-2 max-md:px-5">
                  <div>50k+ Satisfy client's</div>
                </div>
                
                <div className="bg-[rgba(20,186,140,1)] flex w-[513px] max-w-full flex-col -mt-16 pt-[135px] px-px rounded-[34px] max-md:pt-[100px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/df0a2303d2d30ac60dfae2e86307df91ca124bcd?placeholderIfAbsent=true"
                    alt="Happy clients illustration"
                    className="aspect-[1.16] object-contain w-full z-10 mr-[-88px] mb-[-5px] max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="self-stretch w-full mt-[67px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[85%] max-md:w-full max-md:ml-0">
              <div className="flex grow items-stretch gap-5 flex-wrap justify-between max-md:max-w-full max-md:mt-[34px]">
                <div className="bg-white flex flex-col pt-[217px] pb-[123px] rounded-[13px] border-r-4 border-b-4 border-black border-t border-l max-md:py-[100px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/c73d8b4c0ad8ed72aad846ea44ac4d1682d73eca?placeholderIfAbsent=true"
                    alt="Star rating"
                    className="aspect-[111.11] object-contain w-[116px]"
                  />
                </div>
                
                <article className="bg-white flex flex-col text-black px-[38px] py-[41px] rounded-[13px] border-r-4 border-b-4 border-black border-t border-l max-md:max-w-full max-md:px-5">
                  <blockquote className="text-2xl font-medium leading-[43px]">
                    "Finsage helped me shift from salary stress to savings joy — in just two sessions."
                  </blockquote>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/bd1398d796ce60616fe36e7f29df097348740e7d?placeholderIfAbsent=true"
                    alt="5 star rating"
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
                
                <article className="bg-white flex flex-col items-stretch text-black px-[38px] py-[41px] rounded-[13px] border-r-4 border-b-4 border-black border-t border-l max-md:max-w-full max-md:px-5">
                  <blockquote className="text-2xl font-medium leading-[43px] max-md:max-w-full">
                    Our consultancy, with limited marketing resources, hesitated to hire agencies offering generic service packages.
                  </blockquote>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/7509abf4dc688b7f28d5de384d7c2fb49661b605?placeholderIfAbsent=true"
                    alt="5 star rating"
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
              </div>
            </div>
            
            <div className="w-[15%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow items-stretch text-black max-md:mt-[34px]">
                <article className="bg-white flex flex-col text-2xl font-medium leading-[43px] flex-1 pl-[30px] py-[41px] rounded-[13px] border-r-4 border-b-4 border-black border-t border-l">
                  <blockquote className="w-[479px]">
                    Our consultancy, with limited marketing resources, hesitated to hire agencies offering generic service packages.
                  </blockquote>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/f8e0ce7855d66cb715bd632a9dfb499e94a90443?placeholderIfAbsent=true"
                    alt="Star rating"
                    className="aspect-[111.11] object-contain w-[111px] mt-[51px] max-md:mt-10"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/4d4f036479723780418190bc61eee65f94f8614c?placeholderIfAbsent=true"
                    alt="Anurag M. profile"
                    className="aspect-[1.02] object-contain w-14 mt-[25px] rounded-[43px]"
                  />
                </article>
                <div className="text-[17px] font-normal leading-[26px] mt-[247px] max-md:mt-10">
                  <div className="font-semibold text-[15px] leading-[22px] text-black">
                    Anurag M.
                  </div>
                  <div className="text-[14px] leading-[24px] text-black">
                    CHRO, BFSI Company
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
