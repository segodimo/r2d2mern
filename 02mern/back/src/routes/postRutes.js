import { Router } from 'express'
const router = Router()

router.get('/post', (req,res) => res.send([]))
router.get('/post/:id', (req,res) => res.send('post unico'))
router.post('/post', (req,res) => res.send('create'))
router.put('/post', (req,res) => res.send('update'))
router.delete('/post', (req,res) => res.send('deleta'))


export default router
