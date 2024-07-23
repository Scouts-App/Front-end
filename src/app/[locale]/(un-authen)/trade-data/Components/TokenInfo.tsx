import { IconCaretRight, IconCopy, IconStar } from "@tabler/icons-react";
import Image from "next/image";

const TokenInfo = () => {
  return (
    <div className="">
      <div className="my-5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <IconStar className="h-[15px] w-[15px] text-neutral-50" />
          <div className="flex items-center space-x-1">
            <Image
              src="/img/etherum.webp"
              alt="etherum"
              width={24}
              height={24}
            />
            <p className="m-0 text-[25px] font-semibold leading-[24px] text-neutral-10">
              ETH
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <p className="m-0 text-[25px] font-semibold leading-[24px] text-neutral-10">
            $999.999
          </p>
          <Image src="/img/bell.svg" alt="bell" width={18} height={18} />
        </div>
      </div>
      <div className="mb-[18px] flex items-center justify-between">
        <p className="m-0 text-sm-body text-neutral-50">Public Name</p>
        <p className="m-0 text-sm-body text-neutral-10">Ethereum</p>
      </div>

      <div className="mb-[18px] flex items-center justify-between">
        <p className="m-0 text-sm-body text-neutral-50">Address</p>
        <div className="flex space-x-1">
        <IconCopy className="text-neutral-50 w-[14px] h-[14px]"/>
        <p className="m-0 text-sm-body text-status-info">0x4843...474743</p>
        </div>
        
      </div>
      <div className="mb-[18px] flex items-center justify-between">
        <p className="m-0 text-sm-body text-neutral-50">Market Cap</p>
        <p className="m-0 text-sm-body text-neutral-10">$999,999,999.99</p>
      </div>

      <div className="mb-[18px] flex items-center justify-between">
        <p className="m-0 text-sm-body text-neutral-50">FDMC</p>
        <p className="m-0 text-sm-body text-neutral-10">$999,999,999.99</p>
      </div>

      <div className="mb-[18px] flex items-center justify-between">
        <p className="m-0 text-sm-body text-neutral-50">Circulating Supply</p>
        <p className="m-0 text-sm-body text-neutral-10">999,999,999.99</p>
      </div>

      <div className="mb-[18px] flex items-center justify-between">
        <p className="m-0 text-sm-body text-neutral-50">Max Total Supply</p>
        <p className="m-0 text-sm-body text-neutral-10">999,999,999.99</p>
      </div>

      <div className="mb-[18px] flex items-center justify-between">
        <p className="m-0 text-sm-body text-neutral-50">Holders</p>
        <p className="m-0 text-sm-body text-neutral-10">99,999</p>
      </div>

      <div className="flex items-center justify-between">
        <Image src={"/img/facebook.svg"} alt="facebook" width={18} height={18}/>
        <Image src={"/img/youtube.svg"} alt="youtube" width={18} height={18}/>
        <Image src={"/img/tiktok.svg"} alt="tiktok" width={18} height={18}/>
        <Image src={"/img/telegram.png"} alt="telegram" width={18} height={18}/>
        <Image src={"/img/x.svg"} alt="x" width={18} height={18}/>
        <p className="m-0 px-2 py-1 w-[50px] h-[30px] rounded-3xl flex items-center justify-center space-x-1 text-[#969A9C] text-xs-body bg-alpha-neutral">More <IconCaretRight className="w-[12px] h-[12px]"/></p>
      </div>
    </div>
  );
};

export default TokenInfo;
