import { Preport } from 'assets';
import PageHeader from 'components/Common/PageHeader';
import { useToast } from 'hooks/useToast';
import { useEffect } from 'react';
import styles from './ReportsPage.module.scss';

const ReportsPage = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast.success('이 페이지는 할 게 없으니 토스트나 띄우겠습니다');
  });
  return (
    <>
      <PageHeader icon={<Preport />} content="Reports" />
    </>
  );
};

export default ReportsPage;
