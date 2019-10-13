import React, { Component } from 'react';
import styles from '../../stylesheets/modules/search/hitbox.module';

function htmlDecode(input) {
  //eslint-disable-next-line
  return input.replace(/[^a-z0-9\s]/gi, '').replace(/(gt)/gi, '');
}

class HitBox extends Component {
  render() {
    const { hit } = this.props;
    console.log('hit: ', hit);
    return (
      <article className='hit-card'>
        {hit && (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={hit.repository && hit.repository.url ? hit.repository.url : `https://npmjs.com/package/${hit.name}`}>
            <div className={styles['product-wrapper']}>
              <div className='product-summary'>
                <div>
                  <h3 className={styles['product-title']}>{hit.name}</h3>
                </div>
                <div>
                  <img className={styles['product-title']} src={hit.owner.avatar} height='40' width='40' />
                </div>
              </div>
              <div>
                <h3 className={styles['product-name']}>{hit.owner.name}</h3>
              </div>
              <div>
                <p className={styles['product-desc']}>{htmlDecode(hit.description)}</p>
              </div>
            </div>
          </a>
        )}
      </article>
    );
  }
}

export default HitBox;