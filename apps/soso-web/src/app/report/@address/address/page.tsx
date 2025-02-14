import Divider from '@/shared/components/divider/Divider';
import Input from '@/shared/components/inputs/Input';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';

export default function FindAddress() {
  return (
    <div className="modal-page">
      <Header title="주소" type="back" />
      <Flex direction="col" gap={10} className="w-full px-8 pb-20 pt-76">
        <div className="w-full px-12">
          <Input placeholder="검색어를 입력해주세요." height="42px" className="border border-[#E5E7F1] bg-white" />
        </div>
        <Divider height="1px" />
        <Flex direction="col" className="w-full">
          <Flex direction="col" gap={10} className="w-full border-b border-[#F5F7F9] px-12 py-10">
            <p className="text-14 font-normal text-[#120CE8]">56463</p>
            <Flex align="center" gap={8}>
              <span className="bg-[#F5F7F9] px-4 py-2 text-12 font-normal text-[#5E6267]">도로명</span>
              <p className="text-12 font-normal text-[#27282C]">서울특별시 강남구 강남대로 328 (역삼동)</p>
            </Flex>
            <Flex align="center" gap={8}>
              <span className="bg-[#F5F7F9] px-4 py-2 text-12 font-normal text-[#5E6267]">지번</span>
              <p className="text-12 font-normal text-[#27282C]">서울특별시 강남구 역삼동 832-3 강남역 쉐르빌</p>
            </Flex>
          </Flex>
          <Flex direction="col" gap={10} className="w-full border-b border-[#F5F7F9] px-12 py-10">
            <p className="text-14 font-normal text-[#120CE8]">56463</p>
            <Flex align="center" gap={8}>
              <span className="bg-[#F5F7F9] px-4 py-2 text-12 font-normal text-[#5E6267]">도로명</span>
              <p className="text-12 font-normal text-[#27282C]">서울특별시 강남구 강남대로 328 (역삼동)</p>
            </Flex>
            <Flex align="center" gap={8}>
              <span className="bg-[#F5F7F9] px-4 py-2 text-12 font-normal text-[#5E6267]">지번</span>
              <p className="text-12 font-normal text-[#27282C]">서울특별시 강남구 역삼동 832-3 강남역 쉐르빌</p>
            </Flex>
          </Flex>
          <Flex direction="col" gap={10} className="w-full border-b border-[#F5F7F9] px-12 py-10">
            <p className="text-14 font-normal text-[#120CE8]">56463</p>
            <Flex align="center" gap={8}>
              <span className="bg-[#F5F7F9] px-4 py-2 text-12 font-normal text-[#5E6267]">도로명</span>
              <p className="text-12 font-normal text-[#27282C]">서울특별시 강남구 강남대로 328 (역삼동)</p>
            </Flex>
            <Flex align="center" gap={8}>
              <span className="bg-[#F5F7F9] px-4 py-2 text-12 font-normal text-[#5E6267]">지번</span>
              <p className="text-12 font-normal text-[#27282C]">서울특별시 강남구 역삼동 832-3 강남역 쉐르빌</p>
            </Flex>
          </Flex>
          <Flex direction="col" gap={10} className="w-full border-b border-[#F5F7F9] px-12 py-10">
            <p className="text-14 font-normal text-[#120CE8]">56463</p>
            <Flex align="center" gap={8}>
              <span className="bg-[#F5F7F9] px-4 py-2 text-12 font-normal text-[#5E6267]">도로명</span>
              <p className="text-12 font-normal text-[#27282C]">서울특별시 강남구 강남대로 328 (역삼동)</p>
            </Flex>
            <Flex align="center" gap={8}>
              <span className="bg-[#F5F7F9] px-4 py-2 text-12 font-normal text-[#5E6267]">지번</span>
              <p className="text-12 font-normal text-[#27282C]">서울특별시 강남구 역삼동 832-3 강남역 쉐르빌</p>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
