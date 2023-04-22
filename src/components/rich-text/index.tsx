import React from 'react';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'react-router-dom';
import ContentImage from '../core/ContentImage';

const options = {
  renderMark: {
    [MARKS.CODE]: text => {
      return (
        <pre>
          <code>{text}</code>
        </pre>
      );
    },
    [MARKS.BOLD]: text => <strong>{text}</strong>,
    [MARKS.ITALIC]: text => <em>{text}</em>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h1 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          {children}
        </h1>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2 className='text-white font-medium md:text-[42px] sm:text-[36px] xs:text-[40px] text-[24px] mt-12'>
          {children}
        </h2>
      );
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3>{children}</h3>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h1>{children}</h1>;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.find(item =>
          item.marks?.find(mark => mark.type === 'code')
        )
      ) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        );
      }

      return <p className='mb-2'>{children}</p>;
    },

    [INLINES.ENTRY_HYPERLINK]: node => {
      if (node.data.target.sys.contentType.sys.id === 'post') {
        return (
          <Link to={`/projects/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        );
      }
    },

    [INLINES.HYPERLINK]: node => {
      const text = node.content.find(item => item.nodeType === 'text')?.value;
      return (
        <a href={node.data.uri} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      );
    },

    [BLOCKS.EMBEDDED_ENTRY]: node => {
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            height='400'
            width='100%'
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <ContentImage
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.title}
        />
      );
    },
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className='list-disc'>{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className='list-disc'>{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  },
};

interface Props {
  content?: any;
}

const RichText: React.FC<Props> = ({ content }) => {
  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
