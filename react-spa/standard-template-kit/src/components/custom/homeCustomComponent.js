import React, { useRef } from 'react';
import { getRouterBasename } from '../../helpers/AppHelpers';

function HomeComponent ({
  image1,
  image1hover,
  image2,
  image2hover,
  image3,
  image3hover,
  image4,
  image4hover,
  image5,
  image5hover,
  image6,
  image6hover,
  image7,
  image7hover,
  image8,
  image8hover,
  image9,
  image9hover,
  image10,
  image10hover,
  image11,
  image11hover,
  linkType1,
  page1,
  external1,
  download1,
  linkType2,
  page2,
  external2,
  download2,
  linkType3,
  page3,
  external3,
  download3,
  linkType4,
  page4,
  external4,
  download4,
  linkType5,
  page5,
  external5,
  download5,
  linkType6,
  page6,
  external6,
  download6,
  linkType7,
  page7,
  external7,
  download7,
  linkType8,
  page8,
  external8,
  download8,
  linkType9,
  page9,
  external9,
  download9,
  linkType10,
  page10,
  external10,
  download10,
  linkType11,
  page11,
  external11,
  download11,
}) {

  const baseUrl = process.env.REACT_APP_MGNL_HOST;

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);
  const image6Ref = useRef(null);
  const image7Ref = useRef(null);
  const image8Ref = useRef(null);
  const image9Ref = useRef(null);
  const image10Ref = useRef(null);
  const image11Ref = useRef(null);

  const downloadLink1 = download1 ? download1['@link'] : baseUrl;
  const href1 = linkType1 === "page1" ? (getRouterBasename() + page1).replace("//", "/").replace("Home/Home", "Home") : linkType1 === "external1" ? external1 : downloadLink1;

  const downloadLink2 = download2 ? download2['@link'] : baseUrl;
  const href2 = linkType2 === "page2" ? (getRouterBasename() + page2).replace("//", "/").replace("Home/Home", "Home") : linkType2 === "external2" ? external2 : downloadLink2;

  const downloadLink3 = download3 ? download3['@link'] : baseUrl;
  const href3 = linkType3 === "page3" ? (getRouterBasename() + page3).replace("//", "/").replace("Home/Home", "Home") : linkType3 === "external3" ? external3 : downloadLink3;

  const downloadLink4 = download4 ? download4['@link'] : baseUrl;
  const href4 = linkType4 === "page4" ? (getRouterBasename() + page4).replace("//", "/").replace("Home/Home", "Home") : linkType4 === "external4" ? external4 : downloadLink4;

  const downloadLink5 = download5 ? download5['@link'] : baseUrl;
  const href5 = linkType5 === "page5" ? (getRouterBasename() + page5).replace("//", "/").replace("Home/Home", "Home") : linkType5 === "external5" ? external5 : downloadLink5;

  const downloadLink6 = download6 ? download6['@link'] : baseUrl;
  const href6 = linkType6 === "page6" ? (getRouterBasename() + page6).replace("//", "/").replace("Home/Home", "Home") : linkType6 === "external6" ? external6 : downloadLink6;

  const downloadLink7 = download7 ? download7['@link'] : baseUrl;
  const href7 = linkType7 === "page7" ? (getRouterBasename() + page7).replace("//", "/").replace("Home/Home", "Home") : linkType7 === "external7" ? external7 : downloadLink7;

  const downloadLink8 = download8 ? download8['@link'] : baseUrl;
  const href8 = linkType8 === "page8" ? (getRouterBasename() + page8).replace("//", "/").replace("Home/Home", "Home") : linkType8 === "external8" ? external8 : downloadLink8;

  const downloadLink9 = download9 ? download9['@link'] : baseUrl;
  const href9 = linkType9 === "page9" ? (getRouterBasename() + page9).replace("//", "/").replace("Home/Home", "Home") : linkType9 === "external9" ? external9 : downloadLink9;

  const downloadLink10 = download10 ? download10['@link'] : baseUrl;
  const href10 = linkType10 === "page10" ? (getRouterBasename() + page10).replace("//", "/").replace("Home/Home", "Home") : linkType10 === "external10" ? external10 : downloadLink10;

  const downloadLink11 = download11 ? download11['@link'] : baseUrl;
  const href11 = linkType11 === "page11" ? (getRouterBasename() + page11).replace("//", "/").replace("Home/Home", "Home") : linkType11 === "external11" ? external11 : downloadLink11;

  const handleClick = (event, href) => {
    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <div className='homeComponentWrapper'>
      <div className="homeComponent">
        <img
          className='image1'
          style={href1 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href1)}
          onMouseOver={() => {
            image1hover && (image1Ref.current.src = image1hover['@link'])
          }}
          onMouseOut={() => {
            image1hover && (image1Ref.current.src = image1 && image1['@link']);
          }}
          src={image1 && image1['@link']}
          alt=""
          ref={image1Ref}
        />
        <img
          className='image2'
          style={href2 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href2)}
          onMouseOver={() => {
            image2hover && (image2Ref.current.src = image2hover['@link'])
          }}
          onMouseOut={() => {
            image2hover && (image2Ref.current.src = image2 && image2['@link']);
          }}
          src={image2 && image2['@link']}          
          alt=""
          ref={image2Ref}
        />
        <img
          className='image3'
          style={href3 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href3)}
          onMouseOver={() => {
            image3hover && (image3Ref.current.src = image3hover['@link'])
          }}
          onMouseOut={() => {
            image3hover && (image3Ref.current.src = image3 && image3['@link']);
          }}
          src={image3 && image3['@link']}
          alt=""
          ref={image3Ref}
        />
        <img
          className='image4'
          style={href4 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href4)}
          onMouseOver={() => {
            image4hover && (image4Ref.current.src = image4hover['@link'])
          }}
          onMouseOut={() => {
            image4hover && (image4Ref.current.src = image4 && image4['@link']);
          }}
          src={image4 && image4['@link']}
          alt=""
          ref={image4Ref}
        />
        <img
          className='image5'
          style={href5 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href5)}
          onMouseOver={() => {
            image5hover && (image5Ref.current.src = image5hover['@link'])
          }}
          onMouseOut={() => {
            image5hover && (image5Ref.current.src = image5 && image5['@link']);
          }}
          src={image5 && image5['@link']}
          alt=""
          ref={image5Ref}
        />
        <img
          className='image6'
          style={href6 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href6)}
          onMouseOver={() => {
            image6hover && (image6Ref.current.src = image6hover['@link'])
          }}
          onMouseOut={() => {
            image6hover && (image6Ref.current.src = image6 && image6['@link']);
          }}
          src={image6 && image6['@link']}
          alt=""
          ref={image6Ref}
        />
        <img
          className='image7'
          style={href7 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href7)}
          onMouseOver={() => {
            image7hover && (image7Ref.current.src = image7hover['@link'])
          }}
          onMouseOut={() => {
            image7hover && (image7Ref.current.src = image7 && image7['@link']);
          }}
          src={image7 && image7['@link']}
          alt=""
          ref={image7Ref}
        />
        <img
          className='image8'
          style={href8 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href8)}
          onMouseOver={() => {
            image8hover && (image8Ref.current.src = image8hover['@link'])
          }}
          onMouseOut={() => {
            image8hover && (image8Ref.current.src = image8 && image8['@link']);
          }}
          src={image8 && image8['@link']}
          alt=""
          ref={image8Ref}
        />
        <img
          className='image9'
          style={href9 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href9)}
          onMouseOver={() => {
            image9hover && (image9Ref.current.src = image9hover['@link'])
          }}
          onMouseOut={() => {
            image9hover && (image9Ref.current.src = image9 && image9['@link']);
          }}
          src={image9 && image9['@link']}
          alt=""
          ref={image9Ref}
        />
        <img
          className='image10'
          style={href10 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href10)}
          onMouseOver={() => {
            image10hover && (image10Ref.current.src = image10hover['@link'])
          }}
          onMouseOut={() => {
            image10hover && (image10Ref.current.src = image10 && image10['@link']);
          }}
          src={image10 && image10['@link']}
          alt=""
          ref={image10Ref}
        />
        <img
          className='image11'
          style={href11 ? { cursor: 'pointer' } : {}}
          onClick={(event) => handleClick(event, href11)}
          onMouseOver={() => {
            image11hover && (image11Ref.current.src = image11hover['@link'])
          }}
          onMouseOut={() => {
            image11hover && (image11Ref.current.src = image11 && image11['@link']);
          }}
          src={image11 && image11['@link']}
          alt=""
          ref={image11Ref}
        />
      </div>
    </div>
  )
}

export default HomeComponent;


