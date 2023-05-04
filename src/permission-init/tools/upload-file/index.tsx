import React, {useCallback, useState} from 'react';
import {Upload, Button, Image, Row, Space} from 'antd';
import ProTable, {ProColumns} from '@ant-design/pro-table';
import {apis} from '@/permission-init/utils';

export function UploadFile() {
  const [files, setFiles] = useState<any>([]);

  const handleUpload = useCallback(async () => {
    const newFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('file', file, file.name);
      const {data} = await apis.uploadFile({
        headers: {'Content-Type': 'multipart/form-data;charset=UTF-8'},
        body: formData,
      });
      file.url = data;
      file.status = 'success';
      newFiles.push(file);
    }
    setFiles(newFiles);
  }, [files]);

  const genProps = useCallback(() => {
    return {
      showUploadList: false,
      withCredentials: true,
      multiple: true,
      // fileList: files,
      headers: {'Content-Type': 'multipart/form-data'},
      beforeUpload(_, fileList) {
        setFiles(fileList);
        return false;
      },
    };
  }, [files]);
  return (
    <>
      <Space style={{marginBottom: 24}}>
        <Upload {...genProps()}>
          <Button type="primary">Select File</Button>
        </Upload>
        <Button type="primary" onClick={handleUpload}>
          Upload
        </Button>
      </Space>
      <ProTable
        bordered
        search={false}
        pagination={false}
        toolBarRender={false}
        columns={columns}
        size="small"
        scroll={{x: 'max-content'}}
        dataSource={files.map((f) => ({name: f.name, url: f.url}))}
      />
    </>
  );
}

const columns: ProColumns[] = [
  {
    title: 'Image',
    dataIndex: 'image',
    width: 100,
    render(_, record) {
      const url = record.url;
      if (url) {
        return <Image src={`https://static.phemex.com${url}`} width={50} />;
      }
      return '';
    },
  },
  {title: 'File Name', dataIndex: 'name'},
  {title: 'Link', dataIndex: 'url'},
];
