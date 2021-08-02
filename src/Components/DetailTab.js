import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const TabContainer = styled.div`
    margin-top: 20px;
    height: 50px;
    width: 100%;
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
    font-size: ${(props) => (props.active ? '20px' : '16px')};
    border-bottom: ${(props) => (props.active ? '3px solid #2fa3c7' : 'transparent')};
    transition: border-bottom-color 0.4s ease-in-out;
`;

const TabContent = styled.div`
    margin-top: 10px;
    height: 650px;
    background: transparent;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    width: 100%;
    display: flex;
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

const tabs = [
    { id: 1, title: 'Movie' },
    { id: 2, title: 'Info' },
    { id: 3, title: 'Series' },
];

const useVideo = (videos) => {
    const originVideos = videos;
    const [activeVideo, setActiveVideo] = useState(0);
    const [video, setCurrentVideo] = useState(originVideos[activeVideo] || null);

    useEffect(() => {
        console.log(activeVideo);
        setCurrentVideo(originVideos[activeVideo] || null);
    }, [originVideos, setCurrentVideo, activeVideo]);

    return { activeVideo, setActiveVideo, video, length: videos.length };
};

const Video = ({ id }) => {
    const onReady = useCallback((event) => {
        event.target.pauseVideo();
    }, []);
    return id !== undefined ? (
        <YouTube videoId={id} opts={{ height: '650px', width: '100%' }} onReady={onReady} />
    ) : (
        <></>
    );
};

const DetailTab = ({ result, isMovie }) => {
    const [activeTab, setActiveTab] = useState(1);

    const { activeVideo, setActiveVideo, video, length } = useVideo(
        result.videos?.results.filter((v) => v.site === 'YouTube') || [],
    );

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
                        <Tab
                            key={t.id}
                            onClick={() => setActiveTab(t.id)}
                            active={t.id === activeTab}>
                            {t.title}
                        </Tab>
                    ))}
            </TabContainer>
            <TabContent>
                {activeTab === 1 ? (
                    <>
                        {activeVideo !== 0 && (
                            <PrevNav onClick={() => onClick(activeVideo - 1)}>＜</PrevNav>
                        )}
                        <Video id={video?.key} />
                        {activeVideo !== length - 1 && (
                            <NextNav onClick={() => onClick(activeVideo + 1)}>＞</NextNav>
                        )}
                    </>
                ) : (
                    <></>
                )}
            </TabContent>
        </>
    );
};

export default DetailTab;
