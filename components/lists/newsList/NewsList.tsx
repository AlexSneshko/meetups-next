'use client'
//import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
//import { newsStore, NewsStoreContext, UserStoreContext } from '../../../context/storeContext'
//import { useTranslation } from 'react-i18next'
//import { NavigateFunction, useNavigate } from 'react-router-dom'
import { News } from '../../../core/types/News'
import { NewsCard } from '../../cards/newsCard/NewsCard'
import Button from '../../ui/button/Button'
import styles from './NewsList.module.scss'
import { useRouter } from 'next/router'


export interface NewsListSkeletonProps {
  skeleton: true
}

const NewsList = (): JSX.Element => {
  const router = useRouter()
  // const navigate: NavigateFunction = useNavigate();
  // const { t } = useTranslation();
  // const userStore = useContext(UserStoreContext)
  // const newsStore = useContext(NewsStoreContext)

  const onPreview = (news: News) => {
    //navigate(`/news/preview-news/${news.id}`)
    router.push(`/news/preview-news/${news.id}`)
  }

  const onCreateNews = () => {
    //navigate('/news/create-news')
    router.push('/news/create-news')
  }

  //const allNews: Array<News> = newsStore.allNews
  const allNews: Array<News> = []


  return (
    <div className={styles.newsList}>
      <div className={styles.firstLine}>
        <h1 className="basicH1">{/*{t('news')}*/}news</h1>
        <Button 
          type="secondary" 
          callback={onCreateNews} 
          text={'createNews'} 
          // text={t('createNews')} 
          /*disabled={!userStore.isModerator}*/ />
      </div>
      <div className={styles.news}>
        {allNews.map((news) =>
          <NewsCard news={news} onPreview={onPreview} key={news.id} />
        )}
      </div>
    </div>

  )
}

export default NewsList