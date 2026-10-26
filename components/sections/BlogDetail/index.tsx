import React from 'react';
import Link from 'next/link';
import { CalendarDays, User, CheckCircle2, FlaskConical, Settings, ShieldCheck, ArrowRight, Microscope, Pill, Activity } from 'lucide-react';
import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

const getIconComponent = (iconName?: string) => {
  switch (iconName) {
    case 'FlaskConical':
      return <FlaskConical className="w-5 h-5" />;
    case 'Settings':
      return <Settings className="w-5 h-5" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5" />;
    case 'Microscope':
      return <Microscope className="w-5 h-5" />;
    case 'Pill':
      return <Pill className="w-5 h-5" />;
    case 'Activity':
      return <Activity className="w-5 h-5" />;
    default:
      return <FlaskConical className="w-5 h-5" />;
  }
};

export default function BlogDetail({ blog, recentPosts }: { blog: any, recentPosts: any[] }) {
  if (!blog) return <div>Blog not found</div>;

  const renderTitle = (title: string, highlight?: string) => {
    if (highlight && title.includes(highlight)) {
      const parts = title.split(highlight);
      const beforeHighlight = parts[0];
      if (beforeHighlight.trimEnd().endsWith('in')) {
        const line1 = beforeHighlight.trimEnd().slice(0, -2).trim();
        return (
          <>
            {line1}{' '}
            <br className="hidden sm:inline" />
            in <span className="text-[#0097ab]">{highlight}</span>
            {parts[1]}
          </>
        );
      }
      return (
        <>
          {parts[0]}
          <span className="text-[#0097ab]">{highlight}</span>
          {parts[1]}
        </>
      );
    }

    const lower = title.toLowerCase();
    if (lower.includes('in pharmaceutical manufacturing')) {
      const idx = lower.indexOf('in pharmaceutical manufacturing');
      const firstPart = title.substring(0, idx).trim();
      return (
        <>
          {firstPart}{' '}
          <br className="hidden sm:inline" />
          in <span className="text-[#0097ab]">Pharmaceutical Manufacturing</span>
        </>
      );
    }

    if (lower.includes('pharmaceutical manufacturing')) {
      const idx = lower.indexOf('pharmaceutical manufacturing');
      const firstPart = title.substring(0, idx);
      return (
        <>
          {firstPart}
          <span className="text-[#0097ab]">Pharmaceutical Manufacturing</span>
        </>
      );
    }

    const words = title.split(' ');
    if (words.length > 3) {
      const mainPart = words.slice(0, -2).join(' ');
      const highlightPart = words.slice(-2).join(' ');
      return (
        <>
          {mainPart} <span className="text-[#0097ab]">{highlightPart}</span>
        </>
      );
    }

    return title;
  };

  const formattedDate = blog.date || (blog.month && blog.day ? `${blog.month} ${blog.day}, 2024` : 'March 15, 2024');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        <Breadcrumb 
          data={blog.breadcrumb || pages?.blog_details?.breadcrumb} 
          className="pt-12 pb-6 lg:pt-16 lg:pb-7"
        />

        <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-8 lg:pb-14">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Blog Content */}
              <div className="w-full lg:w-[65%] xl:w-[70%]">
                
                {/* Badge */}
                <div className="inline-flex items-center bg-[#e0f4f7] text-[#0097ab] text-[13px] sm:text-[14px] font-semibold px-3.5 py-1 rounded-full mb-4">
                  {blog.category || 'Healthcare'}
                </div>

                {/* Title */}
                <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-bold text-[#071536] leading-[1.25] tracking-tight mb-5">
                  {renderTitle(blog.title || 'The Importance of Quality Control in Pharmaceutical Manufacturing', blog.titleHighlight)}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-[#5a6e85] text-[15px] mb-8">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-[18px] h-[18px] text-[#0097ab] shrink-0" strokeWidth={2} />
                    <span className="font-normal text-[#5a6e85]">{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-[18px] h-[18px] text-[#0097ab] shrink-0" strokeWidth={2} />
                    <span className="font-normal text-[#5a6e85]">By {blog.author || 'Admin'}</span>
                  </div>
                </div>

                {/* Main Image */}
                <div className="rounded-2xl overflow-hidden mb-10 w-full aspect-[2/1] bg-gray-100">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rich Content Area */}
                <div className="prose prose-lg max-w-none text-[#4b5563]">
                  {/* Intro */}
                  <p className="text-[17px] leading-[1.8] mb-8">
                    {blog.intro || blog.excerpt}
                  </p>

                  {/* SubSection 1: Overview with Image */}
                  {blog.subSection1 && (
                    <>
                      <h2 className="text-[26px] sm:text-[28px] font-bold text-[#071536] mb-6 flex items-center gap-2">
                        {blog.subSection1.heading}{' '}
                        {blog.subSection1.headingHighlight && (
                          <span className="text-[#0097ab]">{blog.subSection1.headingHighlight}</span>
                        )}
                      </h2>

                      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 mb-10 items-stretch">
                        <p className="text-[17px] leading-[1.8] flex-1 my-0">
                          {blog.subSection1.text}
                        </p>
                        {blog.subSection1.image && (
                          <div className="w-full md:w-[280px] lg:w-[320px] shrink-0 rounded-2xl overflow-hidden relative self-stretch aspect-[16/9] md:aspect-auto">
                            <img 
                              src={blog.subSection1.image} 
                              alt={blog.title} 
                              className="w-full h-full object-cover md:absolute md:inset-0" 
                            />
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {/* SubSection 2: Key Points with Checkmarks */}
                  {blog.subSection2 && (
                    <>
                      <h2 className="text-[26px] sm:text-[28px] font-bold text-[#071536] mb-4 flex items-center gap-2">
                        {blog.subSection2.heading}{' '}
                        {blog.subSection2.headingHighlight && (
                          <span className="text-[#0097ab]">{blog.subSection2.headingHighlight}</span>
                        )}
                      </h2>

                      {blog.subSection2.points && blog.subSection2.points.length > 0 && (
                        <ul className="space-y-2.5 mb-10 list-none p-0 m-0">
                          {blog.subSection2.points.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 my-0 py-0.5">
                              <CheckCircle2 className="w-5 h-5 text-[#0097ab] shrink-0 mt-0.5" />
                              <span className="text-[16px] sm:text-[17px] text-[#4b5563] leading-[1.6]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}

                  {/* Processes: Process Cards */}
                  {blog.processes && (
                    <>
                      <h2 className="text-[24px] sm:text-[28px] font-bold text-[#071536] tracking-tight mb-7">
                        {blog.processes.heading}{' '}
                        {blog.processes.headingHighlight && (
                          <span className="text-[#0097ab]">{blog.processes.headingHighlight}</span>
                        )}
                      </h2>

                      {blog.processes.items && blog.processes.items.length > 0 && (
                        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5 mb-10">
                          {blog.processes.items.map((proc: any, i: number) => (
                            <div key={i} className="bg-white border border-[#e5edf5] rounded-xl p-3.5 sm:p-4 hover:border-[#0097ab]/40 hover:shadow-sm transition-all duration-300 flex flex-col justify-start">
                              <div className="w-9 h-9 rounded-full bg-[#e0f4f7] flex items-center justify-center mb-2.5 text-[#0097ab] shrink-0">
                                {getIconComponent(proc.icon)}
                              </div>
                              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#071536] mb-1.5 leading-[1.25]">
                                {proc.title}
                              </h3>
                              <p className="text-[12.5px] sm:text-[13px] text-[#5a6e85] leading-[1.45] m-0">
                                {proc.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {/* Conclusion */}
                  {blog.conclusion && (
                    <>
                      <h2 className="text-[26px] sm:text-[28px] font-bold text-[#071536] mb-4">
                        {blog.conclusion.heading || 'Conclusion'}
                      </h2>
                      <p className="text-[17px] leading-[1.8]">
                        {blog.conclusion.text}
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column: Sidebar */}
              <aside className="w-full lg:w-[35%] xl:w-[30%] lg:sticky lg:top-24 lg:self-start flex flex-col gap-8">
                
                {/* Recent Posts */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#e5edf5]">
                  <h3 className="text-[20px] sm:text-[21px] font-bold text-[#071536] mb-4 tracking-tight">Recent Posts</h3>
                  <div className="flex flex-col gap-4">
                    {((recentPosts && recentPosts.length > 0) ? recentPosts : [
                      {
                        title: "Benefits of Contract Manufacturing in Pharma",
                        date: "March 10, 2024",
                        image: "/blogs/recent-1.webp",
                        slug: "benefits-of-contract-manufacturing",
                      },
                      {
                        title: "A Complete Guide to Pharmaceutical Tablets",
                        date: "February 28, 2024",
                        image: "/blogs/recent-2.webp",
                        slug: "guide-to-pharmaceutical-tablets",
                      },
                      {
                        title: "How to Ensure Drug Safety and Efficacy",
                        date: "February 15, 2024",
                        image: "/blogs/recent-3.webp",
                        slug: "ensure-drug-safety-and-efficacy",
                      },
                      {
                        title: "The Role of Technology in Modern Pharma",
                        date: "January 20, 2024",
                        image: "/blogs/recent-4.webp",
                        slug: "role-of-technology-in-modern-pharma",
                      },
                      {
                        title: "Benefits of Herbal and Natural Products",
                        date: "January 05, 2024",
                        image: "/blogs/recent-5.webp",
                        slug: "benefits-of-herbal-products",
                      },
                    ]).slice(0, 5).map((post: any, idx: number) => (
                      <Link href={`/blogs/${post.slug || '#'}`} key={idx} className="flex items-center gap-3.5 group cursor-pointer">
                        <div className="w-[66px] h-[66px] sm:w-[70px] sm:h-[70px] shrink-0 rounded-xl overflow-hidden bg-gray-100">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                          />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <span className="text-[#8291a5] text-[12.5px] sm:text-[13px] font-medium mb-0.5 tracking-normal">
                            {post.date || (post.month && post.day ? `${post.month} ${post.day}, ${post.year || '2024'}` : 'March 10, 2024')}
                          </span>
                          <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#071536] leading-[1.3] group-hover:text-[#0097ab] transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Box */}
                <div className="rounded-2xl p-8 bg-[#09306b] text-white overflow-hidden relative shadow-lg">
                  <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.webp')] opacity-10"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-[24px] font-bold mb-4 leading-[1.2]">Have Any Questions?</h3>
                    <p className="text-[#b1c5df] text-[15px] leading-[1.6] mb-8">
                      We are here to help. Get in touch with our team for more information about our products and services.
                    </p>
                    <Link href="/enquiry-now" className="inline-flex items-center gap-2 bg-white text-[#051139] px-6 py-3.5 rounded-full font-bold text-[15px] hover:bg-[#00a3ba] hover:text-white transition-all group">
                      Enquiry Now
                      <ArrowRight className="w-4 h-4 text-[#00a3ba] group-hover:text-white transition-colors" />
                    </Link>
                  </div>
                </div>

              </aside>

            </div>
          </div>
        </section>
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}
