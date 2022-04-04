import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import StyledGlobalFooter from './styles';

const guideLink = {
  primary: [
    '정보',
    '보도자료',
    '저작권',
    '문의하기',
    '크리에이터',
    '광고',
    '개발자',
  ],
  secondary: [
    '약관',
    '개인정보처리방침',
    '정책 및 안전',
    'YouTube 작동의 원리',
    '새로운 기능 테스트하기',
  ],
};

const companyInfo = [
  { id: 1, term: 'CEO', desc: '선다 피차이' },
  {
    id: 2,
    term: '주소',
    desc: '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.',
  },
  { id: 3, term: '전화', desc: '080-822-1450', additionalDesc: '(무료)' },
];

const GlobalFooter = memo((props) => {
  return (
    <StyledGlobalFooter className="sidebar-footer">
      <div className="guide-link-group is-primary">
        {guideLink.primary.map((item) => {
          return (
            <Link key={item} to="/">
              {item}
            </Link>
          );
        })}
      </div>

      <div className="guide-link-group is-secondary">
        {guideLink.secondary.map((item) => {
          return (
            <Link key={item} to="/">
              {item}
            </Link>
          );
        })}
      </div>

      <div className="info">
        <p className="copyright">© 2022 Google LLC</p>

        <dl className="detail">
          {companyInfo.map((item) => (
            <div key={item.id}>
              <dt>{item.term}</dt>
              <dd>
                {item.term !== '전화' ? (
                  item.desc
                ) : (
                  <a href={`tel:${item.desc}`}>
                    {item.desc} {item.additionalDesc}
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </StyledGlobalFooter>
  );
});

export default GlobalFooter;
