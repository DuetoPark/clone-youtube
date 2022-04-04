import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import StyledGlobalFooter from './styles';

const guideLink = {
  primary: [
    { id: 1, value: '정보' },
    { id: 2, value: '보도자료' },
    { id: 3, value: '저작권' },
    { id: 4, value: '문의하기' },
    { id: 5, value: '크리에이터' },
    { id: 6, value: '광고' },
    { id: 7, value: '개발자' },
  ],
  secondary: [
    { id: 1, value: '약관' },
    { id: 2, value: '개인정보처리방침' },
    { id: 3, value: '정책 및 안전' },
    { id: 4, value: 'YouTube 작동의 원리' },
    { id: 5, value: '새로운 기능 테스트하기' },
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
          return <Link to="/">{item.value}</Link>;
        })}
      </div>

      <div className="guide-link-group is-secondary">
        {guideLink.secondary.map((item) => {
          return <Link to="/">{item.value}</Link>;
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
