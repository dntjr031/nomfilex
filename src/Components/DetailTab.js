import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import YouTube from 'react-youtube';
import Info from './Info';
import Message from './Message';
import Season from './Season';

const TabContainer = styled.div`
  margin-top: 20px;
  height: 50px;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 90%;
  cursor: pointer;
  font-size: ${(props) => (props.active ? '25px' : '23px')};
  border-bottom: ${(props) => (props.active ? '3px solid #2fa3c7' : 'transparent')};
  transition: border-bottom-color 0.4s ease-in-out, font-size 0.2s;
`;

const TabContent = styled.div`
  max-width: 1100px;
  margin-top: 15px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
  }
`;

const PrevNav = styled.div`
  position: absolute;
  left: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(90deg, rgba(82, 82, 82, 0.6), transparent);
  display: flex;
  justify-content: flex-start;
  color: white;
  padding-left: 20px;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out;

  &:hover {
    opacity: 1;
  }

  z-index: 100;
`;
const NextNav = styled.div`
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(-90deg, rgba(82, 82, 82, 0.6), transparent);
  display: flex;
  justify-content: flex-end;
  color: white;
  padding-right: 20px;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out;
  z-index: 100;

  &:hover {
    opacity: 1;
  }
`;

const FlexBox = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2%;
  min-height: 500px;
  background-color: rgba(131, 131, 131, 0.3);
  margin-bottom: 20px;
`;

const useVideo = (videos) => {
  const originVideos = videos;
  const [activeVideo, setActiveVideo] = useState(0);
  const [video, setCurrentVideo] = useState(originVideos[activeVideo] || null);

  useEffect(() => {
    setCurrentVideo(originVideos[activeVideo] || null);
  }, [originVideos, setCurrentVideo, activeVideo]);

  return { activeVideo, setActiveVideo, video, length: videos.length };
};

const Video = ({ id }) => {
  const onReady = useCallback((event) => {
    event.target.pauseVideo();
  }, []);
  return id !== undefined ? (
    <YouTube videoId={id} opts={{ height: '590px', width: '100%' }} onReady={onReady} />
  ) : (
    <Message color="#b9b9b9d9" text="Not Video..." size={30} />
  );
};

const DetailTab = ({ result, isMovie }) => {
  const [activeTab, setActiveTab] = useState(1);

  const videos = useMemo(
    () => result.videos?.results.filter((v) => v.site === 'YouTube') || [],
    [result],
  );
  const tabs = useMemo(
    () => [
      { id: 1, title: 'Footage' },
      { id: 2, title: `${isMovie ? 'Movie' : 'TV'} Info` },
      { id: 3, title: 'Series' },
    ],
    [isMovie],
  );
  const seasons = useMemo(() => result?.seasons?.filter((s) => s.id !== result.id) || [], [result]);

  const { activeVideo, setActiveVideo, video, length } = useVideo(videos);

  const onClick = useCallback(
    (num) => {
      if (num < 0 || num >= length) {
        return;
      }
      setActiveVideo(num);
    },
    [setActiveVideo, length],
  );

  return (
    <>
      <TabContainer>
        {tabs
          .filter((t) => !isMovie || (isMovie && t.id !== 3))
          .map((t) => (
            <Tab key={t.id} onClick={() => setActiveTab(t.id)} active={t.id === activeTab}>
              {t.title}
            </Tab>
          ))}
      </TabContainer>
      <TabContent>
        {activeTab === 1 ? (
          <>
            {activeVideo !== 0 && <PrevNav onClick={() => onClick(activeVideo - 1)}>＜</PrevNav>}
            <Video id={video?.key} />
            {activeVideo !== length - 1 && (
              <NextNav onClick={() => onClick(activeVideo + 1)}>＞</NextNav>
            )}
          </>
        ) : activeTab === 2 ? (
          <Info {...result} />
        ) : (
          <FlexBox>
            {seasons.map((s) => (
              <Season
                key={s.id}
                title={s.name}
                id={s.id}
                year={s.air_date}
                imageUrl={s.poster_path}
              />
            ))}
          </FlexBox>
        )}
      </TabContent>
    </>
  );
};

export default DetailTab;
