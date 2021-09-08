import React from 'react';
import s from './layout.module.css';

const Layout = ({ title = 'title', descr = 'descr', urlBg, colorBg = '#e2e2e2' }) => {
  const layoutStyle = {
    background: urlBg ? `url("${urlBg}") center no-repeat` : colorBg,
  };
  console.log();
  return (
    <section className={s.root} style={layoutStyle}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
