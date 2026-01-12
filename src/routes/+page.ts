export const load = async () => {
  return {
    // 초기 데이터 - SEO에 도움이 되는 기본 정보
    seo: {
      title: 'PJP - Perfect Json Parser | JSON 검증, 파싱, 시각화 도구',
      description: 'JSON 파싱 오류를 정확하게 찾아주고 계층적 구조로 시각화해주는 무료 온라인 도구입니다. 실시간 JSON 검증, 포맷팅, 압축, 오류 분석을 제공합니다.',
      keywords: 'JSON parser, JSON validator, JSON formatter, JSON 검증, JSON 파싱, JSON 시각화'
    },
    // 샘플 JSON을 사전 로드하여 SSR에서 초기 콘텐츠 제공
    sampleJson: {
      name: "PJP",
      fullName: "Perfect Json Parser", 
      version: "1.0.0",
      description: "JSON 파싱 및 검증 도구",
      features: [
        "실시간 JSON 검증",
        "트리 구조 시각화",
        "오류 위치 표시",
        "다양한 형식 변환"
      ],
      settings: {
        theme: "light",
        autoValidate: true,
        maxFileSize: 5242880
      }
    }
  };
};

// SSR 활성화 (크롤링 봇 감지 개선)
export const ssr = true;

// 정적 사이트 생성 비활성화 (Cloudflare에서 동적 렌더링 사용)
export const prerender = false;
