import svgPaths from "./svg-erhp1lvzmy";
import imgImage19 from "figma:asset/dd70bf2064efd7a7e8135e6d2bf38d16aad84c6f.png";
import imgImage26 from "figma:asset/04a1485035ff79a1d1a092ffdd7c37ff6438f82e.png";
import imgImage27 from "figma:asset/9dbd27573f07a3f256ee2d47ae3cae20b2081760.png";
import imgImage28 from "figma:asset/d05600d70957185734a91000adecc45d01451275.png";
import imgFigmaToLottie from "figma:asset/6cea7fa11a97b88b2d5be1c24adeaf4b43c4bd12.png";
import imgImage from "figma:asset/b40f40b7f12344feca1231a8474d33e9bd6c53dd.png";
import imgNeedAAppleLogo from "figma:asset/9068bee7337ebd3bb2b5ea90680f2d413e971355.png";
import imgImage1 from "figma:asset/19c7abe57057a9bdaf0c64648fead21ec94e5ddb.png";
import imgAnimation17393550206622 from "figma:asset/993300d3f69a0569bfbc0dcba5ef3edf70f9140a.png";
import imgLoader from "figma:asset/19523328c6f62628ee9cb318992df246fc5534f7.png";
import imgImage2 from "figma:asset/e72560f0676eba7a9475a0259a66a2312c43d42b.png";

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Montserrat:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#4a4545] text-[18px] w-full">
        <p className="font-['Montserrat:SemiBold',sans-serif] leading-[28px] mb-0 whitespace-pre-wrap">Why Chat</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Investors start with vague questions</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[28px]">Chat allowed ambiguity as valid input</span>
          </li>
        </ul>
        <p className="leading-[28px] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <p className="font-['Montserrat:SemiBold',sans-serif] leading-[28px] mb-0 whitespace-pre-wrap">What made this different from generic chat</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Grounded in Systematic’s internal database</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Context-aware (profile + session)</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[28px]">Designed to guide discovery, not replace judgment</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <p className="bg-clip-text bg-gradient-to-r font-['Montserrat:SemiBold',sans-serif] from-[#3fb399] from-[4.252%] leading-[1.339] not-italic relative shrink-0 text-[32px] text-[transparent] to-[#7f67e3] to-[79.974%] w-full">💡 Solution Part 1 — Conversational Discovery</p>
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[40px] pt-[80px] px-[132px] top-0 w-[1440px]">
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[4.16%_4.17%_0.78%_8.34%]" data-name="Group">
      <div className="absolute inset-[96.42%_46.2%_0.78%_50.32%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[4.16%_4.17%_11.98%_8.34%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 12.9372">
          <path clipRule="evenodd" d={svgPaths.p13437600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function MingcuteSearchAiLine() {
  return (
    <div className="absolute aspect-[24/24] left-[7.14%] overflow-clip right-[7.14%] top-[2px]" data-name="mingcute:search-ai-line">
      <Group />
    </div>
  );
}

function SystemLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="System-Line">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <g id="Vector" />
        </g>
      </svg>
      <MingcuteSearchAiLine />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[167px]" data-name="Input">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.42px] whitespace-nowrap">
        <p className="leading-[18px]">Ask Systematic Agent</p>
      </div>
      <SystemLine />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute content-stretch flex h-[42px] items-center justify-center left-0 p-[12px] rounded-[7px] top-0 w-[204px]" data-name="Input" style={{ backgroundImage: "linear-gradient(99.8815deg, rgb(39, 207, 125) 5.1841%, rgb(151, 71, 255) 113.52%)" }}>
      <Input1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f6f9ff] col-1 content-stretch flex items-start ml-0 mt-0 overflow-clip px-[12px] py-[10px] relative rounded-[12px] row-1 w-[54.02%]">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#4a4545] text-[14px] whitespace-nowrap">Click on Ask Systematic Agent CTA → Opens the same entry point.</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="col-1 h-[42px] ml-[77.56%] mt-[3px] relative row-1 w-[22.439999999999998%]">
        <Input />
      </div>
      <div className="col-1 flex h-0 items-center justify-center ml-[54.02%] mt-[24px] relative row-1 w-[23.539999999999996%]">
        <div className="-rotate-90 flex-none h-[276.858px] w-px">
          <div className="relative size-full">
            <div className="absolute inset-[0_-5.77px_-1.93%_-5.77px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.547 282.191">
                <path d={svgPaths.p11e71000} fill="var(--stroke-0, #585F59)" id="Vector 78" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[54px] items-start relative shrink-0 w-full">
      <p className="bg-clip-text bg-gradient-to-r font-['Montserrat:SemiBold',sans-serif] from-[#40b29b] leading-[1.339] not-italic relative shrink-0 text-[32px] text-[transparent] to-[#7e69e1] to-[22.704%] w-full">Entry Points</p>
      <Group1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[132px] py-[80px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[132px] py-[40px] relative w-full">
          <div className="font-['Montserrat:Bold',sans-serif] leading-[1.339] not-italic relative shrink-0 text-[#cecece] text-[0px] w-[235px]">
            <p className="mb-[6px] text-[32px]">FTUE</p>
            <p className="text-[#616161] text-[24px]">Design</p>
          </div>
          <div className="h-[441px] relative rounded-[20px] shrink-0 w-[758px]" data-name="image 19">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage19} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f6f9ff] col-1 content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] gap-[10px] items-start ml-[677px] mt-[24px] not-italic overflow-clip px-[12px] py-[10px] relative rounded-[12px] row-1 text-[#4a4545] text-[14px] text-right w-[339px]">
      <p className="leading-[28px] relative shrink-0 w-[300px]">Click on the Search Bar</p>
      <p className="leading-[24px] relative shrink-0 w-[300px]">Opens the recent searches (if available), or allows the user to begin typing a query. This action also enables direct access to the AI chat mode.</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[192px] ml-0 mt-0 relative row-1 w-[606px]" data-name="image 26">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage26} />
      </div>
      <div className="col-1 flex h-0 items-center justify-center ml-[588px] mt-[61.99px] relative row-1 w-[89px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[89px] relative w-0">
            <div className="absolute inset-[0_-2.89px_-3%_-2.89px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7735 91.6667">
                <path d={svgPaths.p4f7ec00} fill="var(--stroke-0, #585F59)" id="Vector 78" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Group2 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[132px] py-[40px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] gap-[4px] items-start leading-[28px] relative shrink-0 w-full">
      <p className="min-w-full relative shrink-0 text-[#cecece] text-[14px] w-[min-content]">📋 Chat Response Format</p>
      <p className="h-[28px] relative shrink-0 text-[#4a4545] text-[16px] w-[484px]">Supports: Text, Tables, and Links.</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#cecece] text-[14px] w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[28px] relative shrink-0 whitespace-nowrap">If the answer is long:</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[0] min-w-full relative shrink-0 w-[min-content]">
        <span className="leading-[20px]">Add “</span>
        <span className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] text-[#4a4545]">View All</span>
        <span className="leading-[20px]">” → redirects to specific tab (Investor, Competitor, etc.)</span>
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-[484px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] relative shrink-0 text-[#cecece] text-[18px] tracking-[-0.09px] w-full">Chat Popup Opens once a conversation starts.</p>
      <div className="font-['Montserrat:Medium',sans-serif] leading-[0] relative shrink-0 text-[#4a4545] text-[0px] w-full">
        <p className="leading-[28px] mb-0 text-[#cecece] text-[14px]">Header Icons:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[16px]">Collapse (↘️)</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[16px]">History</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[16px]">New Chat</span>
          </li>
        </ul>
        <p className="leading-[28px] text-[#cecece] text-[14px]">Hover states exist for all icons.</p>
      </div>
      <Frame32 />
      <Frame31 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="h-[414px] relative shrink-0 w-[458px]" data-name="image 27">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage27} />
      </div>
      <Frame25 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f8f5ff] content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-[312px]">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#4a4545] text-[14px] whitespace-nowrap">Resets conversation state</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f8f5ff] content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-[312px]">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#4a4545] text-[14px] whitespace-nowrap">Retains ability to access previous history</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Montserrat:Bold',sans-serif] leading-[1.339] not-italic relative shrink-0 text-[#cecece] text-[20px] whitespace-nowrap">🔃 New Chat Behavior</p>
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[54px] items-start px-[132px] py-[40px] relative w-full">
          <p className="font-['Montserrat:Bold',sans-serif] leading-[1.339] not-italic relative shrink-0 text-[#cecece] text-[32px] w-full">💬 Chat Interface Behavior</p>
          <Frame26 />
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[14px] w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[28px] relative shrink-0 text-[#cecece] whitespace-nowrap">Clicking on any chat:</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#4a4545] w-[min-content]">Opens last message, allows scroll to older ones</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] gap-[8px] items-start leading-[0] relative shrink-0 text-[#4a4545] text-[16px] whitespace-nowrap">
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[24px]">
          <span className="leading-[20px]">History sorted by most recent first</span>
        </li>
      </ul>
      <ul className="block relative shrink-0">
        <li className="list-disc ms-[24px]">
          <span className="leading-[20px]">Clicking History icon expands sidebar</span>
        </li>
      </ul>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex font-['Montserrat:Medium',sans-serif] gap-[20px] items-start leading-[20px] relative shrink-0 text-[#4a4545] w-full">
      <p className="relative shrink-0">Rename</p>
      <p className="relative shrink-0">Delete</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[14px] w-full whitespace-nowrap">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[28px] relative shrink-0 text-[#cecece]">3 Dot Options</p>
      <Frame38 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-[378px]">
      <Frame34 />
      <Frame35 />
      <Frame37 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#cecece] text-[14px] whitespace-nowrap">
        <span className="leading-[28px]">Pagination or “</span>
        <span className="leading-[28px] text-[#4a4545]">Load More</span>
        <span className="leading-[28px]">” if chat list is long</span>
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame33 />
      <div className="h-[414px] relative shrink-0 w-[595px]" data-name="image 28">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage28} />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[54px] items-start px-[132px] py-[40px] relative w-full">
          <p className="font-['Montserrat:Bold',sans-serif] leading-[1.339] not-italic relative shrink-0 text-[#cecece] text-[32px] w-full">🧭 Chat History Management</p>
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function LogoAndTitle() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[191px]" data-name="Logo and Title">
      <div className="relative shrink-0 size-[32px]" data-name="🟢 Figma to Lottie ✨">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFigmaToLottie} />
      </div>
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5a5a] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">Systematic Agent</p>
    </div>
  );
}

function PajamasDuoChatNew() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="pajamas:duo-chat-new">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pajamas:duo-chat-new">
          <path clipRule="evenodd" d={svgPaths.p386d580} fill="var(--fill-0, #636E72)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HugeiconsSidebarTop() {
  return (
    <div className="relative size-[24px]" data-name="hugeicons:sidebar-top">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="hugeicons:sidebar-top">
          <path d={svgPaths.p256f9800} id="Vector" stroke="var(--stroke-0, #636E72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FluentMinimize12Filled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fluent:minimize-12-filled">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fluent:minimize-12-filled">
          <path d={svgPaths.p250ed280} fill="var(--fill-0, #636E72)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Header">
      <LogoAndTitle />
      <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[24px]">
          <PajamasDuoChatNew />
        </div>
        <div className="relative shrink-0 size-[24px]">
          <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <HugeiconsSidebarTop />
            </div>
          </div>
        </div>
        <FluentMinimize12Filled />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="image">
      <div className="absolute inset-0 rounded-[100px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <Image />
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#2d3436] text-[12px] text-left tracking-[0.36px] whitespace-nowrap">Adobe</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame14 />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#2d3436] text-[12px] text-left w-[505px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}</p>
    </div>
  );
}

function TablePortfolioLoanInformation() {
  return (
    <div className="bg-[#eaf1fe] font-['Source_Sans_Pro:SemiBold',sans-serif] h-[36px] not-italic relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 text-[#2d3436] text-[12px] w-full" data-name="Table/Portfolio-Loan-information">
      <div className="absolute bottom-1/4 flex flex-col justify-center left-[3.17%] right-[80.79%] text-center top-1/4">
        <p className="leading-[16px]">Company name</p>
      </div>
      <div className="absolute bottom-1/4 flex flex-col justify-center left-[46.93%] right-[46.34%] text-left top-1/4">
        <p className="leading-[16px]">Round</p>
      </div>
      <div className="absolute bottom-1/4 flex flex-col justify-center left-[84.36%] right-[6.93%] text-left top-1/4">
        <p className="leading-[16px]">Industry</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-[16px] mt-[12px] relative row-1">
      <div className="pointer-events-none relative rounded-[100px] shrink-0 size-[16px]" data-name="need a apple logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[100px] size-full" src={imgNeedAAppleLogo} />
        <div aria-hidden="true" className="absolute border-[0.4px] border-[rgba(128,139,177,0.25)] border-solid inset-[-0.2px] rounded-[100.2px]" />
      </div>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#2d3436] text-[12px] text-left tracking-[0.36px] whitespace-nowrap">Apple</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[40px] ml-0 mt-0 relative row-1 w-[505px]" data-name="BG">
        <div aria-hidden="true" className="absolute border-[#dfe6e9] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      </div>
      <Frame16 />
      <p className="col-1 font-['Source_Sans_Pro:Regular',sans-serif] leading-[16px] ml-[237px] mt-[12px] not-italic relative row-1 text-[#2d3436] text-[12px] text-left tracking-[0.36px] whitespace-nowrap">Seed</p>
      <div className="col-1 flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center ml-[426px] mt-[12px] not-italic relative row-1 text-[#2d3436] text-[12px] text-left tracking-[0.36px] whitespace-nowrap">
        <p className="leading-[16px]">Technology</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-[16px] mt-[12px] relative row-1">
      <div className="relative rounded-[100px] shrink-0 size-[16px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgImage1} />
      </div>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#2d3436] text-[12px] text-left tracking-[0.36px] whitespace-nowrap">Infosys</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[40px] ml-0 mt-0 relative row-1 w-[505px]" data-name="BG">
        <div aria-hidden="true" className="absolute border-[#dfe6e9] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      </div>
      <Frame17 />
      <p className="col-1 font-['Source_Sans_Pro:Regular',sans-serif] leading-[16px] ml-[237px] mt-[12px] not-italic relative row-1 text-[#2d3436] text-[12px] text-left tracking-[0.36px] whitespace-nowrap">Seed</p>
      <div className="col-1 flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center ml-[426px] mt-[12px] not-italic relative row-1 text-[#2d3436] text-[12px] text-left tracking-[0.36px] whitespace-nowrap">
        <p className="leading-[16px]">Technology</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-[16px] mt-[12px] relative row-1">
      <div className="relative shrink-0 size-[16px]" data-name="Facebook">
        <div className="absolute inset-[6.25%]" data-name="bg">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <circle cx="7" cy="7" fill="url(#paint0_linear_1_1324)" id="bg" r="7" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1324" x1="7" x2="7" y1="0" y2="13.9585">
                <stop stopColor="#18ACFE" />
                <stop offset="1" stopColor="#0163E0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-[6.25%] left-[31.25%] right-[31.25%] top-1/4" data-name="f">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d={svgPaths.p12fadb80} fill="var(--fill-0, white)" id="f" />
          </svg>
        </div>
      </div>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#2d3436] text-[12px] text-left tracking-[0.36px] whitespace-nowrap">Facebook</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[40px] ml-0 mt-0 row-1 w-[505px]" data-name="BG" />
      <Frame21 />
      <p className="col-1 font-['Source_Sans_Pro:Regular',sans-serif] leading-[16px] ml-[237px] mt-[12px] not-italic relative row-1 text-[#2d3436] text-[12px] text-left tracking-[0.36px] whitespace-nowrap">Seed</p>
      <div className="col-1 flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center ml-[426px] mt-[12px] not-italic relative row-1 text-[#2d3436] text-[12px] text-left tracking-[0.36px] whitespace-nowrap">
        <p className="leading-[16px]">Technology</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full">
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative rounded-[6px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] shrink-0 w-[505px]">
      <TablePortfolioLoanInformation />
      <Frame18 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-white h-[254px] left-0 rounded-[8px] top-0 w-[527px]">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[10px] py-[6px] relative rounded-[inherit] size-full">
        <Frame20 />
        <Frame19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8f1ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FooterTextContainer() {
  return (
    <div className="bg-[#edf3ff] content-stretch flex h-[49px] items-center px-[12px] py-[5px] relative rounded-[6px] shrink-0 w-[465px]" data-name="Footer Text Container">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1f2a3e] text-[12px] tracking-[0.36px] w-[442px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `}</p>
    </div>
  );
}

function MaterialSymbolsLightSendRounded() {
  return (
    <div className="bg-[#4f8dfc] overflow-clip relative rounded-[35px] shrink-0 size-[24px]" data-name="material-symbols-light:send-rounded">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 rounded-[2px] size-[10px] top-1/2" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between not-italic relative shrink-0 text-[#8c9fa7] text-left w-full whitespace-nowrap">
      <p className="leading-[0] relative shrink-0 text-[11px]">
        <span className="leading-[14px]">{`Systematic `}</span>
        <span className="leading-[14px]">Agent</span>
        <span className="leading-[14px]">{` may make mistakes and isn't a substitute for professional advice.`}</span>
      </p>
      <p className="leading-[14px] relative shrink-0 text-[10px]">Powered by OpenAI</p>
    </div>
  );
}

function ResponseContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Response Container">
      <div className="h-[30px] relative shrink-0 w-[60px]" data-name="Response Loader">
        <div className="absolute h-[30px] left-0 top-0 w-[60px]" data-name="Animation - 1739355020662 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAnimation17393550206622} />
        </div>
      </div>
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Chat Input variants">
        <div className="bg-white h-[46px] relative rounded-[20px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#9bbfff] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_10px_0px_rgba(79,141,252,0.2)]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] py-[5px] relative size-full">
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8d9095] text-[14px] text-center tracking-[0.42px] whitespace-nowrap">Ask Systematic Agent or search</p>
              <MaterialSymbolsLightSendRounded />
            </div>
          </div>
        </div>
        <Frame24 />
      </button>
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-end relative shrink-0 w-full" data-name="Footer Container">
      <FooterTextContainer />
      <ResponseContainer />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-[522px] items-start justify-end min-h-px min-w-px relative" data-name="Content">
      <button className="block cursor-pointer h-[276px] relative shrink-0 w-[527px]">
        <Frame15 />
      </button>
      <FooterContainer />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex h-[522px] items-center overflow-clip relative shrink-0 w-full" data-name="Content Container">
      <Content />
    </div>
  );
}

function Chat() {
  return (
    <div className="bg-white h-[602px] relative rounded-[20px] shrink-0 w-full" data-name="Chat">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between px-[16px] py-[18px] relative size-full">
          <Header />
          <ContentContainer />
        </div>
      </div>
    </div>
  );
}

function InputComponents() {
  return (
    <div className="content-stretch flex flex-col h-[225px] items-start justify-end overflow-clip relative rounded-[20px] shadow-[0px_0px_10px_0px_rgba(79,141,252,0.25)] shrink-0 w-full" data-name="Input components">
      <Chat />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#4a4545] text-[14px] whitespace-nowrap">Loading...</p>
      <InputComponents />
    </div>
  );
}

function Base() {
  return (
    <div className="bg-[#f93a37] content-stretch flex items-center justify-center p-[8px] relative rounded-[35px] shrink-0 size-[20px]" data-name="Base">
      <div className="relative shrink-0 size-[16px]" data-name="ic20-info">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path clipRule="evenodd" d={svgPaths.p186ff00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Base1() {
  return (
    <div className="bg-[#f93a37] content-stretch flex items-center justify-center p-[8px] relative rounded-[35px] shrink-0 size-[20px]" data-name="Base">
      <div className="relative shrink-0 size-[16px]" data-name="ic20-info">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path clipRule="evenodd" d={svgPaths.p186ff00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Base2() {
  return (
    <div className="bg-[#f93a37] content-stretch flex items-center justify-center p-[8px] relative rounded-[35px] shrink-0 size-[20px]" data-name="Base">
      <div className="relative shrink-0 size-[16px]" data-name="ic20-info">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path clipRule="evenodd" d={svgPaths.p186ff00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[498px]">
      <button className="bg-[#fff6f5] relative rounded-[8px] shrink-0 w-full" data-name="Errors">
        <div aria-hidden="true" className="absolute border border-[#ffdcd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Base />
            <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2a3e] text-[12px] text-left w-[310px]">
              <p className="leading-[16px]">Something went wrong</p>
            </div>
          </div>
        </div>
      </button>
      <button className="bg-[#fff6f5] relative rounded-[8px] shrink-0 w-full" data-name="Errors">
        <div aria-hidden="true" className="absolute border border-[#ffdcd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Base1 />
            <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2a3e] text-[12px] text-left whitespace-nowrap">
              <p className="leading-[16px]">I didn’t quite get that. Try rephrasing or ask me something else.</p>
            </div>
          </div>
        </div>
      </button>
      <button className="bg-[#fff6f5] relative rounded-[8px] shrink-0 w-full" data-name="Errors">
        <div aria-hidden="true" className="absolute border border-[#ffdcd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Base2 />
            <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2a3e] text-[12px] text-left whitespace-nowrap">
              <p className="leading-[16px]">That data isn’t available right now.</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Base3() {
  return (
    <div className="bg-[#fbbf24] content-stretch flex items-center justify-center p-[8px] relative rounded-[35px] shrink-0 size-[20px]" data-name="Base">
      <div className="relative shrink-0 size-[16px]" data-name="ic20-info">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path clipRule="evenodd" d={svgPaths.p186ff00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Base4() {
  return (
    <div className="bg-[#fbbf24] content-stretch flex items-center justify-center p-[8px] relative rounded-[35px] shrink-0 size-[20px]" data-name="Base">
      <div className="relative shrink-0 size-[16px]" data-name="ic20-info">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path clipRule="evenodd" d={svgPaths.p186ff00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Base4 />
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2a3e] text-[12px] text-left whitespace-nowrap">
        <p className="leading-[16px]">Having trouble reaching servers. Please retry soon.</p>
      </div>
    </div>
  );
}

function Base5() {
  return (
    <div className="bg-[#fbbf24] content-stretch flex items-center justify-center p-[8px] relative rounded-[35px] shrink-0 size-[20px]" data-name="Base">
      <div className="relative shrink-0 size-[16px]" data-name="ic20-info">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path clipRule="evenodd" d={svgPaths.p186ff00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Base5 />
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2a3e] text-[12px] text-left whitespace-nowrap">
        <p className="leading-[16px]">You’ve used 3 chats this week. Subscribe for more.</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[498px]">
      <button className="bg-[#faf6e9] relative rounded-[8px] shrink-0 w-full" data-name="Errors">
        <div aria-hidden="true" className="absolute border border-[#fae5ae] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Base3 />
            <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2a3e] text-[12px] text-left whitespace-nowrap">
              <p className="leading-[16px]">Still working on it... thanks for your patience.</p>
            </div>
          </div>
        </div>
      </button>
      <button className="bg-[#faf6e9] relative rounded-[8px] shrink-0 w-full" data-name="Errors">
        <div aria-hidden="true" className="absolute border border-[#fae5ae] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
            <Frame22 />
            <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4f8dfc] text-[12px] text-left whitespace-nowrap">
              <p className="leading-[16px]">Retry</p>
            </div>
          </div>
        </div>
      </button>
      <button className="bg-[#faf6e9] relative rounded-[8px] shrink-0 w-full" data-name="Errors">
        <div aria-hidden="true" className="absolute border border-[#fae5ae] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
            <Frame23 />
            <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4f8dfc] text-[12px] text-left whitespace-nowrap">
              <p className="leading-[16px]">Subscribe</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#cecece] text-[14px] whitespace-nowrap">
        <span className="font-['Montserrat:Bold',sans-serif] leading-[28px] text-[#4a4545]">Errors</span>
        <span className="leading-[28px]">: Show user-friendly fallback</span>
      </p>
      <Frame43 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[94px] items-start relative shrink-0 w-full">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[54px] items-start px-[132px] py-[40px] relative w-full">
          <p className="font-['Montserrat:Bold',sans-serif] leading-[1.339] not-italic relative shrink-0 text-[#cecece] text-[32px] w-full">{`⚠️ Errors & Loading States`}</p>
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3211px] items-start left-0 top-[419px] w-[1440px]">
      <Frame6 />
      <Frame7 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame39 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1236px]">
      <div className="bg-clip-text bg-gradient-to-r font-['Montserrat:Bold',sans-serif] from-[#3fb399] from-[4.252%] leading-[1.339] not-italic relative shrink-0 text-[0px] text-[transparent] to-[#7f67e3] to-[79.974%] w-full">
        <p className="mb-[6px] text-[32px]">Chat solved discovery but not evaluation.</p>
        <p className="font-['Montserrat:SemiBold',sans-serif] text-[18px] text-white">Investors could now find companies, but still struggled to answer: “Is this company worth my time and investment?”</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute bg-[#111c2d] content-stretch flex flex-col h-[219px] items-start left-0 overflow-clip px-[132px] py-[80px] top-[3630px] w-[1440px]">
      <Frame3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[96px] w-[672px]">
      <div className="font-['Montserrat:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#4a4545] text-[18px] w-[672px]">
        <p className="leading-[28px] mb-0 whitespace-pre-wrap">We introduced AI Insights directly on company profiles</p>
        <p className="leading-[28px] mb-0 whitespace-pre-wrap">{` to support fast, confident evaluation.`}</p>
        <p className="leading-[28px] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <p className="leading-[28px] mb-0 whitespace-pre-wrap">What AI Insights surfaced</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Clear business summary</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Industry context</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">SWOT-style signals</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[28px]">Investment relevance</span>
          </li>
        </ul>
        <p className="leading-[28px] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <p className="leading-[28px] mb-0 whitespace-pre-wrap">Design principles</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Scan-first, explainable</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Structured, not conversational</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[28px]">Summary first, details later</span>
          </li>
        </ul>
        <p className="leading-[28px] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <p className="bg-clip-text bg-gradient-to-b font-['Montserrat:Bold',sans-serif] from-[#566bd4] leading-[28px] mb-0 text-[transparent] to-[#6075eb] whitespace-pre-wrap">{`This reduced the need for manual synthesis while preserving access to deeper data. `}</p>
        <p className="leading-[28px] whitespace-pre-wrap">Better context → better insights → higher trust → better decisions</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[581px] left-0 top-0 w-[675px]">
      <p className="absolute bg-clip-text bg-gradient-to-r font-['Montserrat:SemiBold',sans-serif] from-[#3fb399] from-[4.252%] leading-[1.339] left-0 not-italic text-[32px] text-[transparent] to-[#7f67e3] to-[79.974%] top-0 w-[802px]">💡Solution Part 2 — AI Insights</p>
      <Frame9 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <Frame4 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute h-[600px] left-[132px] top-[97px] w-[662px]">
      <Group6 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute h-[774px] left-0 top-[3849px] w-[1440px]">
      <Frame48 />
      <div className="absolute h-[343px] left-[794px] shadow-[0px_4px_20px_2px_#e3eaf7] top-[213px] w-[244px]" data-name="Loader">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLoader} />
      </div>
      <div className="absolute h-[588px] left-[987px] shadow-[0px_4px_20px_2px_rgba(227,234,247,0.5)] top-[109px] w-[364px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

export default function Group7() {
  return (
    <div className="relative size-full">
      <Frame5 />
      <Frame46 />
      <Frame49 />
      <Frame47 />
    </div>
  );
}